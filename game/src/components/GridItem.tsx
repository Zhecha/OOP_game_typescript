import React from "react";
import GridItemProps from "../interface/GridItem";
import "../styles/Grid.css";
import { AppStore } from "../redux/rootReducer";
import { useSelector } from "react-redux";

type Props = GridItemProps;

const GridItem: React.FC<Props> = props => {
  const hero = useSelector((state: AppStore) => state.queue.queue)
    .filter(hero => hero.id === props.id && hero.active)
    .pop();
  !hero ? (props.unit.active = false) : (props.unit.active = true);

  let gameGrid = useSelector((state: AppStore) => state.gameGrid.gameGrid);

  const userAttack = () => {
    let teamA = gameGrid.slice(0, 6);
    let teamB = gameGrid.slice(6);
  };
  return (
    <>
      <img
        src={props.PhotoUrl}
        className="box-img"
        alt="HeroObject"
        onClick={() => userAttack()}
      />
      <div className="box-text">{props.teamA ? "A" : "B"}</div>
      <div className="box-hp">{props.unit.getHp() + "hp"}</div>
      <div className="box-active-hero">
        {props.unit.active ? "Active" : null}
      </div>
    </>
  );
};

export default GridItem;
