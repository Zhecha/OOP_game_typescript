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

  let gameGrid = useSelector((state: AppStore) => state.gameGrid.gameGrid);

  const userLogic = () => {};
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
