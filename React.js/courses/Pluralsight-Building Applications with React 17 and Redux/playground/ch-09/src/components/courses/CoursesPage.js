import React, { Component } from "react";
import { connect } from "react-redux";
import * as couresActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends Component {
  //constructor(props) {
  //super(props);

  //this.state = {
  state = {
    course: {
      title: "",
    },
  };

  //this.handleChange = this.handleChange.bind(this);
  //}

  // Arrow functions inherit the binding context of the enclosing scope
  // so no need to bind in constructor

  //  handleChange(event) {
  handleChange = (event) => {
    // copy the course content to course object with new title value
    const courseObj = { ...this.state.course, title: event.target.value };
    this.setState({ course: courseObj });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    //debugger;
    // redux: dispatch an action
    //this.props.dispatch(couresActions.createCourse(this.state.course));
    //alert(this.state.course.title);

    // We don't need to call dispatch here since that's being hanlde in mapDispatchToProps now.
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  //dispatch: PropTypes.func.isRequired,

  // Since we declared mapDispatchToProps, dispatch is no longer injected. Only the actions we declared in mapDispatchToProps are passed
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  //debugger;
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(couresActions.createCourse(course)),
    actions: bindActionCreators(couresActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
