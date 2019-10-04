import Archer from "../../heroes/units/archer";
import Mage from "../../heroes/units/mage";
import Healer from "../../heroes/units/healer";
import Warrior from "../../heroes/units/warrior";

export const GAME_ACTIONS = {
  GET_NEW_GAME_GRID: "GET_NEW_GAME_GRID"
};

interface GetNewGameGridAction {
  type: typeof GAME_ACTIONS.GET_NEW_GAME_GRID;
}

export interface UnitGameGridObjectType {
  id: number;
  PhotoUrl: string;
  teamA: boolean;
  teamB: boolean;
  type: string;
  unit: Archer | Mage | Healer | Warrior;
}

export interface GameGridState {
  gameGrid: Array<UnitGameGridObjectType>;
}

export type GameGridActionsTypes = GetNewGameGridAction;
