import { combineReducers } from "redux";

import gameReducer from "./gameReducere";

const rootReducer = combineReducers({
  games: gameReducer,
});
export default rootReducer;
