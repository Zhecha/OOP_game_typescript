import React from "react";
import GridItemProps from "../interface/GridItem";
import "../styles/Grid.css";
import { AppStore } from "../redux/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { updateQueue } from "../redux/actions/QueueWalkingAction";

type Props = GridItemProps;

const GridItem: React.FC<Props> = props => {
  let dispatch = useDispatch();
  const hero = useSelector((state: AppStore) => state.queue.queue)[0];
  hero.id === props.id
    ? props.unit.setActive(true)
    : props.unit.setActive(false);

  const userLogic = () => {
    let isMyTeam = props.healed.some(unit => unit.id === hero.id);
    if (isMyTeam) {
      if (hero.unit.getType() === "Healer") {
        let targets = hero.unit.getTargetsForAttack(
          props.healed,
          props.attacked,
          props.id,
          hero.id
        );
        let healed = hero.unit.attackTargets(targets, props.id, hero.unit);
        //if (healed.length) {
        dispatch(updateQueue(healed));
        //} else {
        //  alert("You can't heal dead unit");
        //}
      } else {
        alert("You can't attack your team!");
      }
    } else {
      if (hero.unit.getType() !== "Healer") {
        let targets = hero.unit.getTargetsForAttack(
          props.attacked,
          props.healed,
          props.id,
          hero.id
        );
        if (targets.length) {
          console.log(targets);
          let attacked = hero.unit.attackTargets(targets, props.id, hero.unit);
          //  if (attacked.length) {
          dispatch(updateQueue(attacked));
          // } else {
          //   alert("You can't attack dead unit");
          //}
        } else {
          alert("You can't attack");
          dispatch(updateQueue([]));
        }
      } else {
        alert("You can't healed another team!");
      }
    }
  };
  return (
    <>
      <img
        src={props.PhotoUrl}
        className="box-img"
        alt="HeroObject"
        onClick={() => userLogic()}
      />
      <div className="box-text">{props.teamA ? "A" : "B"}</div>
      <div className="box-hp">{props.unit.unitHp.getHp() + "hp"}</div>
      {props.unit.getActive() ? (
        <div className="box-active-hero">Active</div>
      ) : null}
    </>
  );
};

export default GridItem;
