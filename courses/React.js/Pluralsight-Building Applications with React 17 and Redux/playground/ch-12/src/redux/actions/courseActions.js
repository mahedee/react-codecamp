import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall } from "./apiStatusActions";

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

export function createCourseSuccess(courses) {
  return { type: types.CREATE_COURSES_SUCCESS, courses };
}
export function updateCourseSuccess(courses) {
  return { type: types.UPDATE_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCall());
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

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then((courses) => {
        course.id
          ? dispatch(updateCourseSuccess(courses))
          : dispatch(createCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
