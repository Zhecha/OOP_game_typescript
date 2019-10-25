import Unit from "../../heroes/units/unit";
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
  unit: Unit;
}

export interface GameGridState {
  gameGrid: Array<UnitGameGridObjectType>;
}

export type GameGridActionsTypes = GetNewGameGridAction;
