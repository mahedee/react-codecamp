import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  //return { type: "CREATE_COURSE", course: course };

  // debugger;
  // Use object short hand syntax
  // return { type: "CREATE_COURSE", course };
  return { type: types.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
  //console.log("value", courses);
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        //console.log(courses);
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
