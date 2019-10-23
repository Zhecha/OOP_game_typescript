import {
  GAME_ACTIONS,
  GameGridState,
  GameGridActionsTypes,
  UnitGameGridObjectType
} from "../constants/GameGridConstants";

import { Units } from "../../heroes/units/unitFactory";

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
      unit: Units.createInstance(1, "Warrior")
    },
    {
      id: 2,
      PhotoUrl: Skeletonking,
      teamB: true,
      teamA: false,
      unit: Units.createInstance(2, "Warrior")
    },
    {
      id: 3,
      PhotoUrl: DrowRanger,
      teamA: true,
      teamB: false,
      unit: Units.createInstance(3, "Archer")
    },
    {
      id: 4,
      PhotoUrl: DrowRanger,
      teamB: true,
      teamA: false,
      unit: Units.createInstance(4, "Archer")
    },
    {
      id: 5,
      PhotoUrl: NatureProphet,
      teamA: true,
      teamB: false,
      unit: Units.createInstance(5, "Healer")
    },
    {
      id: 6,
      PhotoUrl: NatureProphet,
      teamB: true,
      teamA: false,
      unit: Units.createInstance(6, "Healer")
    },
    {
      id: 7,
      PhotoUrl: VoidSpirit,
      teamA: true,
      teamB: false,
      unit: Units.createInstance(7, "Mage")
    },
    {
      id: 8,
      PhotoUrl: VoidSpirit,
      teamB: true,
      teamA: false,
      unit: Units.createInstance(8, "Mage")
    },
    {
      id: 9,
      PhotoUrl: Skeletonking,
      teamA: true,
      teamB: false,
      unit: Units.createInstance(9, "Warrior")
    },
    {
      id: 10,
      PhotoUrl: Skeletonking,
      teamB: true,
      teamA: false,
      unit: Units.createInstance(10, "Warrior")
    },
    {
      id: 11,
      PhotoUrl: DrowRanger,
      teamA: true,
      teamB: false,
      unit: Units.createInstance(11, "Archer")
    },
    {
      id: 12,
      PhotoUrl: DrowRanger,
      teamA: false,
      teamB: true,
      unit: Units.createInstance(12, "Archer")
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
