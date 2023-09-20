import React, { Component } from "react";
import { connect } from "react-redux";
import * as couresActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";

class CoursesPage extends Component {
  state = {
    redirectToAddCoursePage: false,
  };
  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }

  //constructor(props) {
  //super(props);

  //this.state = {
  // state = {
  //   course: {
  //     title: "",
  //   },
  // };

  //this.handleChange = this.handleChange.bind(this);
  //}

  // Arrow functions inherit the binding context of the enclosing scope
  // so no need to bind in constructor

  //  handleChange(event) {
  // handleChange = (event) => {
  //   // copy the course content to course object with new title value
  //   const courseObj = { ...this.state.course, title: event.target.value };
  //   this.setState({ course: courseObj });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   //debugger;
  //   // redux: dispatch an action
  //   //this.props.dispatch(couresActions.createCourse(this.state.course));
  //   //alert(this.state.course.title);

  //   // We don't need to call dispatch here since that's being hanlde in mapDispatchToProps now.
  //   this.props.actions.createCourse(this.state.course);
  // };

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && (
          <Redirect to="/course"></Redirect>
        )}
        <h2>Courses</h2>
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-course"
          onClick={() => this.setState({ redirectToAddCoursePage: true })}
        >
          Add Course
        </button>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  //dispatch: PropTypes.func.isRequired,

  // Since we declared mapDispatchToProps, dispatch is no longer injected. Only the actions we declared in mapDispatchToProps are passed
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  //debugger;
  return {
    //courses: state.courses,
    courses:
      state.authors.length == 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),

    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(couresActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
