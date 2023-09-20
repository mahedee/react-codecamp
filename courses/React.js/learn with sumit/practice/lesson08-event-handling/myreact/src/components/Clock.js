import React from "react";
import Button from "./Button";

class Clock extends React.Component {

    // never change props inside component
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date(),
            locale: "bn-BD"
         };

         //this keyword inside the method refers to the event object rather than the component instance.
         //this.handleClick = this.handleClick.bind(this);
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

    // this doesn't find setState
    // so, use arrow function. Arrow function doesn't change this
    // or use bind in the constructor
    //handleClick(){
    
    handleClick = (locale) =>{
  
        this.setState({
            //locale: "en-US"
            locale
        });
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render() {

        console.log("Clock component render");
        //destructuring
        const {date, locale} = this.state;
        return (
            <div>
            <h1 className="heading">
                <span className="text">
                    {this.state.date.toLocaleTimeString(locale)}
                </span>
            </h1>
            {/* <button type="button" onClick={this.handleClick}> */}
            {/* Another way */}
            {/* <button type="button" onClick={this.handleClick.bind(this, 'en-US')}>  */}
            {/* Another way */}
            {/* <button type="button" onClick={() => this.handleClick('en-US')}> 
                Click me
            </button> */}

            {/* Another way using class component */}
            {/* <Button change = {this.handleClick.bind(this, 'en-US')}>
                Click here
            </Button> */}

            {/* Another Way */}
            <Button change={this.handleClick} locale = "en-US">
                Click here
            </Button>

            </div>
        );
    }
}

export default Clock;