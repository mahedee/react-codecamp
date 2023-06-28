import React, { useEffect, Component, useState } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
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
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, []);
  // The empty array as a second argument to effect means
  // the effect will run once when the component mounts

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name == "authorId" ? parseInt(value, 10) : value,
    }));
  }

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
    ></CourseForm>
  );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

// redux mapping functions
// to map the Redux store's state to the props of a React component.
function mapStateToProps(state) {
  return {
    course: newCourse,
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
};

// connect component to redux using redux function
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
