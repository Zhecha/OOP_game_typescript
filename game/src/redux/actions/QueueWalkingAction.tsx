import {
  UPDATE_QUEUE,
  GET_NEW_QUEUE,
  QueueActionsTypes
} from "../constants/QueueWalkingConstants";

export const getNewQueue = (): QueueActionsTypes => {
  return {
    type: GET_NEW_QUEUE
  };
};

export const updateQueue = () : QueueActionsTypes => {
  return {
    type: UPDATE_QUEUE
  }
}
