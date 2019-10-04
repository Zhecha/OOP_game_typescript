import {
  QUEUE_ACTIONS,
  QueueState,
  QueueActionsTypes,
  QueueObjectType
} from "../constants/QueueWalkingConstants";

import DrowRanger from "../../images/Drow_Ranger_icon.png";
import Skeletonking from "../../images/Skeleton_King_icon.png";
import NatureProphet from "../../images/Nature's_Prophet_icon.png";
import VoidSpirit from "../../images/Void_Spirit_icon.png";

const initialState: QueueState = {
  queue: [
    {
      id: 1,
      PhotoUrl: Skeletonking,
      teamA: true,
      teamB: false,
      type: "Warrior",
      active: false
    },
    {
      id: 2,
      PhotoUrl: Skeletonking,
      teamB: true,
      teamA: false,
      type: "Warrior",
      active: false
    },
    {
      id: 3,
      PhotoUrl: DrowRanger,
      teamA: true,
      teamB: false,
      type: "Archer",
      active: false
    },
    {
      id: 4,
      PhotoUrl: DrowRanger,
      teamB: true,
      teamA: false,
      type: "Archer",
      active: false
    },
    {
      id: 5,
      PhotoUrl: NatureProphet,
      teamA: true,
      teamB: false,
      type: "Healer",
      active: false
    },
    {
      id: 6,
      PhotoUrl: NatureProphet,
      teamB: true,
      teamA: false,
      type: "Healer",
      active: false
    },
    {
      id: 7,
      PhotoUrl: VoidSpirit,
      teamA: true,
      teamB: false,
      type: "Mage",
      active: false
    },
    {
      id: 8,
      PhotoUrl: VoidSpirit,
      teamB: true,
      teamA: false,
      type: "Mage",
      active: false
    },
    {
      id: 9,
      PhotoUrl: Skeletonking,
      teamA: true,
      teamB: false,
      type: "Warrior",
      active: false
    },
    {
      id: 10,
      PhotoUrl: Skeletonking,
      teamB: true,
      teamA: false,
      type: "Warrior",
      active: false
    },
    {
      id: 11,
      PhotoUrl: DrowRanger,
      teamA: true,
      teamB: false,
      type: "Archer",
      active: false
    },
    {
      id: 12,
      PhotoUrl: DrowRanger,
      teamA: false,
      teamB: true,
      type: "Archer",
      active: false
    }
  ]
};

export default function(
  state = initialState,
  action: QueueActionsTypes
): QueueState {
  switch (action.type) {
    case QUEUE_ACTIONS.GET_NEW_QUEUE:
      return getNewQueue(state.queue);
    default:
      return state;
  }
}

function getNewQueue(queue: Array<QueueObjectType>): QueueState {
  let array = [...queue];
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

  array[0].active = true;

  return { queue: array };
}
