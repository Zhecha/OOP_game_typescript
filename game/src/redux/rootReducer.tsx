import { combineReducers } from "redux";
import queueReducer from "./reducers/QueueWalkingReducer";
import gameGridReducer from "./reducers/GameGridReducer";

export const rootReducer = combineReducers({
  queue: queueReducer,
  gameGrid: gameGridReducer
});

export type AppStore = ReturnType<typeof rootReducer>;
