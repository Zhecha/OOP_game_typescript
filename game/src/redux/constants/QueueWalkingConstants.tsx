import { UnitGameGridObjectType } from "../constants/GameGridConstants";
import Mage from "../../heroes/units/mage";
import Healer from "../../heroes/units/healer";
import Archer from "../../heroes/units/archer";
import Warrior from "../../heroes/units/warrior";

export const GET_NEW_QUEUE = "GET_NEW_QUEUE";
export const UPDATE_QUEUE = "UPDATE_QUEUE";

export interface QueueObjectType {
  id: number;
  PhotoUrl: string;
  teamA: boolean;
  teamB: boolean;
  type: string;
  active: boolean;
  unit: Mage | Archer | Healer | Warrior;
}

export interface QueueState {
  queue: Array<QueueObjectType>;
  newQueue: Array<QueueObjectType>;
  round: number;
}

export type QueueActionsTypes =
  | { type: "GET_NEW_QUEUE" }
  | { type: "UPDATE_QUEUE"; payload: UnitGameGridObjectType[] };
