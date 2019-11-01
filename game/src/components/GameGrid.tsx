import React, { useEffect } from "react";
import Grid from "./Grid";
import { getNewGameGrid } from "../redux/actions/GameGridAction";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../redux/rootReducer";
import { updateQueue } from "../redux/actions/QueueWalkingAction";
import "../styles/GameGrid.css";

const GameGrid: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewGameGrid());
  }, []);

  let activeHero = useSelector((state: AppStore) => state.queue.queue)[0];
  let gameGrid = useSelector((state: AppStore) => state.gameGrid.gameGrid);
  let teamA = gameGrid.slice(0, 6);
  let teamB = gameGrid.slice(6);
  let targets = [];
  if (activeHero.teamA) {
    targets = activeHero.unit.setTargets(teamA, teamB, activeHero.id);
  } else {
    targets = activeHero.unit.setTargets(teamB, teamA, activeHero.id);
  }
  if (!targets.length) {
    dispatch(updateQueue([]));
  }
  return (
    <div className="grid-container">
      <div className="grid-content">
        <Grid healed={teamA} activeHero={activeHero} />
        <hr className="grid-center-line" />
        <Grid healed={teamB} activeHero={activeHero} />
      </div>
    </div>
  );
};

export default GameGrid;
