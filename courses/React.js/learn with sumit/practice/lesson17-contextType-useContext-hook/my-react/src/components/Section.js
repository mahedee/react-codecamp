import React from "react";
import Content from "./Content";

// Convert function component to class component
// prevent rerendering

export default class Section extends React.Component {

    // prevent Section component rerendering
    // see console log
    shouldComponentUpdate(){
        return false;
    }

    render() {
        console.log("Section rendered");
        return (
            <div>
                <h1>This is a section</h1>
                <Content />
            </div>
        );
    }

}

/*
export default function Section({theme}){
    return(
        <div>
            <h1>This is a section</h1>
            <Content/>
        </div>
    );
}

*/