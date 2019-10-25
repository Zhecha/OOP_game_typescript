import { UnitGameGridObjectType } from "../constants/GameGridConstants";
import Unit from "../../heroes/units/unit";

export const GET_NEW_QUEUE = "GET_NEW_QUEUE";
export const UPDATE_QUEUE = "UPDATE_QUEUE";

export interface QueueObjectType {
  id: number;
  PhotoUrl: string;
  teamA: boolean;
  teamB: boolean;
  type: string;
  active: boolean;
  unit: Unit;
}

export interface QueueState {
  queue: Array<QueueObjectType>;
  newQueue: Array<QueueObjectType>;
  round: number;
}

export type QueueActionsTypes =
  | { type: "GET_NEW_QUEUE" }
  | { type: "UPDATE_QUEUE"; payload: UnitGameGridObjectType[] };
