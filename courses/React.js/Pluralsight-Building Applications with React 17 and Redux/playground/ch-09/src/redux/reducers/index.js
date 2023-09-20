import { combineReducers } from "redux";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  //courses: courses,

  // Use object short hand syntax
  courses,
});

export default rootReducer;
