import {
  GAME_ACTIONS,
  GameGridActionsTypes
} from "../constants/GameGridConstants";

export const getNewGameGrid = (): GameGridActionsTypes => {
  return {
    type: GAME_ACTIONS.GET_NEW_GAME_GRID
  };
};
