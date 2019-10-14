import {
  UPDATE_QUEUE,
  GET_NEW_QUEUE,
  QueueActionsTypes
} from "../constants/QueueWalkingConstants";
import {UnitGameGridObjectType} from '../constants/GameGridConstants';

export const getNewQueue = (): QueueActionsTypes => {
  return {
    type: GET_NEW_QUEUE
  };
};

export const updateQueue = (array: UnitGameGridObjectType[] ) : QueueActionsTypes => {
  return {
    type: UPDATE_QUEUE,
    payload: array
  }
}
