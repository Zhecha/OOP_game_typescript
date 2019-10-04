import {
  QUEUE_ACTIONS,
  QueueActionsTypes
} from "../constants/QueueWalkingConstants";

export const getNewQueue = (): QueueActionsTypes => {
  return {
    type: QUEUE_ACTIONS.GET_NEW_QUEUE
  };
};
