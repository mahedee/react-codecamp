import React, { Component } from "react";

export default class CoursesPage extends Component {
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
    alert(this.state.course.title);
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
      </form>
    );
  }
}
