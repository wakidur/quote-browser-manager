import { combineReducers } from "redux";
import quoutsReducer from "./quouts";
import qotdReducer from "./qotd";
import createquoutReducer from "./createquout";
import fetchfirebasesReducer from "./fetchfirebases";


export default combineReducers({
  quouts: quoutsReducer,
  qotd: qotdReducer,
  createquout: createquoutReducer,
  favoritequotes: fetchfirebasesReducer
});
