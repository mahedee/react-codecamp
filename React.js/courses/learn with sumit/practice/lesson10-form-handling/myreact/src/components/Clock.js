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

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    // this doesn't find setState
    // so, use arrow function. Arrow function doesn't change this
    // or use bind in the constructor
    //handleClick(){

    handleClick = (locale) => {

        console.log(locale);
        this.setState({
            //locale: "en-US"
            locale,
        });
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {

        console.log("Clock component render");
        //destructuring
        const { date, locale } = this.state;

        // You are free to write javascript code here

        /*
        let button;
        if (locale === 'bn-BD') {
            console.log('from ' + locale);
            button = (
                <Button change={this.handleClick} locale="en-US">
                    Click here
                </Button>
            );
        }
        else{
            console.log('else from ' + locale);
            button = (
                <Button change={this.handleClick} locale="bn-BD">
                    Click here
                </Button>
            );
        }

        */


        return (
            <div>
                <h1 className="heading">
                    <span className="text">
                        {date.toLocaleTimeString(locale)}
                    </span>
                </h1>
                {/* {button} */}

                {locale === "bn-BD" ? (
                <Button change={this.handleClick} locale="en-US" show = {false} enable = {false}/>
                ) : (
                
                // you need not write show = {true} in case of true value
                <Button change={this.handleClick} locale="bn-BD" show enable />
                )}
            </div>
        );
    }
}

export default Clock;