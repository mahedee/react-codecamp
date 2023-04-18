import React from "react";

// updated as functional component

export default function HoverCounter({ count, incrementCount}){
        return(
            <div>
                <h1 onMouseOver={incrementCount}>
                    Hovered {count} times</h1>
            </div>
        )

}

/*
 class HoverCounter extends React.Component {
    // state = {
    //     count : 0,
    // }

    // incrementCount = () => {
    //     this.setState((prevState) => ({count: prevState.count + 1}))
    // }

    render(){
        //const {count} = this.state;

        const{ count, incrementCount} = this.props;
        return(
            <div>
                <h1 onMouseOver={incrementCount}>
                    Hovered {count} times</h1>
            </div>
        );
    }

}

export default HoverCounter;
*/
