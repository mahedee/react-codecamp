import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  //courses: courses,

  // Use object short hand syntax
  courses,
  authors,
});

export default rootReducer;
