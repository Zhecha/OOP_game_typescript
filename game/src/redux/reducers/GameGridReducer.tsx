import {
  GAME_ACTIONS,
  GameGridState,
  GameGridActionsTypes,
  UnitGameGridObjectType
} from "../constants/GameGridConstants";

import Hero from "../../heroes/units/unitFactory";

import DrowRanger from "../../images/Drow_Ranger_icon.png";
import Skeletonking from "../../images/Skeleton_King_icon.png";
import NatureProphet from "../../images/Nature's_Prophet_icon.png";
import VoidSpirit from "../../images/Void_Spirit_icon.png";

const initialState: GameGridState = {
  gameGrid: [
    {
      id: 1,
      PhotoUrl: Skeletonking,
      teamA: true,
      teamB: false,
      type: "Warrior",
      unit: Hero.getInstance("Warrior")
    },
    {
      id: 2,
      PhotoUrl: Skeletonking,
      teamB: true,
      teamA: false,
      type: "Warrior",
      unit: Hero.getInstance("Warrior")
    },
    {
      id: 3,
      PhotoUrl: DrowRanger,
      teamA: true,
      teamB: false,
      type: "Archer",
      unit: Hero.getInstance("Archer")
    },
    {
      id: 4,
      PhotoUrl: DrowRanger,
      teamB: true,
      teamA: false,
      type: "Archer",
      unit: Hero.getInstance("Archer")
    },
    {
      id: 5,
      PhotoUrl: NatureProphet,
      teamA: true,
      teamB: false,
      type: "Healer",
      unit: Hero.getInstance("Healer")
    },
    {
      id: 6,
      PhotoUrl: NatureProphet,
      teamB: true,
      teamA: false,
      type: "Healer",
      unit: Hero.getInstance("Healer")
    },
    {
      id: 7,
      PhotoUrl: VoidSpirit,
      teamA: true,
      teamB: false,
      type: "Mage",
      unit: Hero.getInstance("Mage")
    },
    {
      id: 8,
      PhotoUrl: VoidSpirit,
      teamB: true,
      teamA: false,
      type: "Mage",
      unit: Hero.getInstance("Mage")
    },
    {
      id: 9,
      PhotoUrl: Skeletonking,
      teamA: true,
      teamB: false,
      type: "Warrior",
      unit: Hero.getInstance("Warrior")
    },
    {
      id: 10,
      PhotoUrl: Skeletonking,
      teamB: true,
      teamA: false,
      type: "Warrior",
      unit: Hero.getInstance("Warrior")
    },
    {
      id: 11,
      PhotoUrl: DrowRanger,
      teamA: true,
      teamB: false,
      type: "Archer",
      unit: Hero.getInstance("Archer")
    },
    {
      id: 12,
      PhotoUrl: DrowRanger,
      teamA: false,
      teamB: true,
      type: "Archer",
      unit: Hero.getInstance("Archer")
    }
  ]
};

export default function(
  state = initialState,
  action: GameGridActionsTypes
): GameGridState {
  switch (action.type) {
    case GAME_ACTIONS.GET_NEW_GAME_GRID:
      return getNewGameGrid(state.gameGrid);
    default:
      return state;
  }
}

function getNewGameGrid(
  gameGrid: Array<UnitGameGridObjectType>
): GameGridState {
  let array = [...gameGrid];
  let currentIndex = array.length,
    temporaryValue = undefined,
    randomIndex = undefined;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  const resultArr = array.sort(
    (a: UnitGameGridObjectType, b: UnitGameGridObjectType) => {
      if (a.teamA) {
        return -1;
      } else {
        return 1;
      }
    }
  );

  return { gameGrid: resultArr };
}
