import React from "react";
import GridItemProps from "../interface/GridItem";
import "../styles/Grid.css";
import { useDispatch } from "react-redux";
import { updateQueue } from "../redux/actions/QueueWalkingAction";

type Props = GridItemProps;

const GridItem: React.FC<Props> = props => {
  const dispatch = useDispatch();
  props.attacker.id === props.id
    ? props.unit.setActive(true)
    : props.unit.setActive(false);

  const userLogic = () => {
    if (props.unit.isAttacked()) {
      const { unit } = props.attacker;
      let attacked = unit.attackTargets(props.attacked, props.id, unit);
      if (props.attacked.every(hero => hero.unit.unitHp.isDeath())) {
        alert("Attacker team won");
      }
      dispatch(updateQueue(attacked));
    }
  };

  return (
    <>
      <img
        src={props.PhotoUrl}
        className={props.unit.isAttacked() ? "box-img-attacked" : props.unit.getActive() ? "box-active-hero" : "box-img"}
        alt="HeroObject"
        onClick={() => userLogic()}
      />
      <div className="box-text">{props.teamA ? "A" : "B"}</div>
      <progress
        className="box-hp"
        max={props.unit.unitHp.getFullHp()}
        value={props.unit.unitHp.getHp()}
      />
    </>
  );
};

export default GridItem;
