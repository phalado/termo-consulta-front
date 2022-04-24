import { combineReducers } from "redux";
import inputs from "./inputs";
import searchArray from "./searchArray";
import removeArray from "./removeArray";
import wordList from "./wordList";

const rootReducer = combineReducers({
  inputs,
  searchArray,
  removeArray,
  wordList,
});

export default rootReducer;
