import React from "react";

class Clock extends React.Component {

    // never change props inside component
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }

    // short cut way without constructor
    //state = {date: new Date()};

    // runs after the component has been rendered to the DOM
    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <h1 className="heading">
                <span className="text">
                    {this.state.date.toLocaleTimeString(this.props.locale)}
                </span>
            </h1>
        );
    }
}

export default Clock;