import React, { useEffect } from "react";
import Grid from "./Grid";
import { getNewGameGrid } from "../redux/actions/GameGridAction";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../redux/rootReducer";
import "../styles/GameGrid.css";

const GameGrid: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewGameGrid());
  }, []);
  let gameGrid = useSelector((state: AppStore) => state.gameGrid.gameGrid);
  let teamA = gameGrid.slice(0, 6);
  let teamB = gameGrid.slice(6);
  console.log(teamA, teamB);
  return (
    <div className="grid-container">
      <div className="grid-content">
        <Grid grid={teamA} />
        <hr className="grid-center-line" />
        <Grid grid={teamB} />
      </div>
    </div>
  );
};

export default GameGrid;
