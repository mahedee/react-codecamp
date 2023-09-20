import React, { useEffect, Component, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
// the PropTypes module is used to define and validate the types of props passed to a component
import PropTypes from "prop-types";
//import { bindActionCreators } from "redux";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

function ManageCoursePage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  saveCourse,
  history,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    } else {
      setCourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, [props.course]);
  // The empty array as a second argument to effect means
  // the effect will run once when the component mounts

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name == "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();

    //The bound savCourse on props takes precedence over the unbound saveCourse thunk at the top
    saveCourse(course).then(() => {
      history.push("/courses");
    });
  }

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
    ></CourseForm>
  );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,

  // Any component loaded via <Route> gets history passed in on props from React Router automatically
  history: PropTypes.object.isRequired,
};

export function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug == slug) || null;
}

// redux mapping functions
// to map the Redux store's state to the props of a React component.
// ownProps: This lets us access the component's props. we can use this to read the URL data injected on props by React Router
function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;

  //debugger;
  // if url exists its edit if url is empty is add
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    //course: newCourse,
    //course: course,

    //use shorthand syntax
    course,
    courses: state.courses,
    authors: state.authors,
  };
}

//used in the React-Redux library to map action creators to props of a React component.
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: {
//       loadCourses: bindActionCreators(couresActions.loadCourses, dispatch),
//       loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
//     },
//   };
// }

const mapDispatchToProps = {
  // we can use javascript short hand syntax
  loadCourses: loadCourses,
  loadAuthors: loadAuthors,
  saveCourse: saveCourse,
};

// connect component to redux using redux function
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
