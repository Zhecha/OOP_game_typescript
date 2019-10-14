import React from "react";
import GridItemProps from "../interface/GridItem";
import "../styles/Grid.css";
import { AppStore } from "../redux/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import Targets from '../heroes/Services/Targets';
import AttackingTargets from '../heroes/Services/AttackingTargets';
import HealTargets from '../heroes/Services/HealTargets';
import DeathTargets from '../heroes/Services/DeathTargets';
import {updateQueue} from '../redux/actions/QueueWalkingAction';

type Props = GridItemProps;

const GridItem: React.FC<Props> = props => {
  let dispatch = useDispatch();
  const hero = useSelector((state: AppStore) => state.queue.queue)[0];
  hero.id === props.id ? (props.unit.setActive(true)) : (props.unit.setActive(false));

  let gameGrid = useSelector((state: AppStore) => state.gameGrid.gameGrid);

  const userLogic = () => {
    let teamA = gameGrid.slice(0,6);
    let teamB = gameGrid.slice(6);
    if(props.teamA === hero.teamA){
      if(hero.type === 'Healer'){
        if(hero.teamA){
          if(!DeathTargets.isDeathHero(props.id, teamA)){
            let healedTeam = Targets.createTargets(hero.type, teamA, props.id);
            HealTargets.healingTargets(healedTeam);
            dispatch(updateQueue([]));
          } else {
            alert("Unit is death. Choose different.")
          }
        } else {
          if(!DeathTargets.isDeathHero(props.id, teamB)){
            let healedTeam = Targets.createTargets(hero.type, teamB, props.id);
            HealTargets.healingTargets(healedTeam);
            dispatch(updateQueue([]));
          } else {
            alert("Unit is death. Choose different.")
          }
        }
      } else {
        alert("You can't attack yourself.")
      }
    } else {
      if(hero.type !== 'Healer'){
        if(hero.teamA) {
          if(!DeathTargets.isDeathHero(props.id, teamB)){
            let attackedTeam = Targets.createTargets(hero.type, teamB, props.id);
            let deathHeroes = AttackingTargets.attackTargets(hero.type, attackedTeam);
            dispatch(updateQueue(deathHeroes));
          } else {
            alert("Unit is death. Choose different.")
          }
        } else {
          if(!DeathTargets.isDeathHero(props.id, teamA)){
            let attackedTeam = Targets.createTargets(hero.type, teamA, props.id);
            let deathHeroes = AttackingTargets.attackTargets(hero.type, attackedTeam);
            dispatch(updateQueue(deathHeroes));
          } else {
            alert("Unit is death. Choose different.")
          }
        }
      } else {
        alert("You can't heal unit from another team.")
      }
    }

  }
  return (
    <>
      <img
        src={props.PhotoUrl}
        className="box-img"
        alt="HeroObject"
        onClick={() => userLogic()}
      />
      <div className="box-text">{props.teamA ? "A" : "B"}</div>
      <div className="box-hp">{props.unit.getHp() + "hp"}</div>
      <div className="box-active-hero">
        {props.unit.getActive() ? "Active" : null}
      </div>
    </>
  );
};

export default GridItem;
