import React from "react";

// update as functional component
export default function ClickCounter({count, incrementCount} ){
    return(
        <div>
            <button type="button" onClick={incrementCount}>Clicked {count} times</button>
        </div>
    );

}

/*

 class ClickCounter extends React.Component {
    // state = {
    //     count : 0,
    // }

    // incrementCount = () => {
    //     this.setState((prevState) => ({count: prevState.count + 1}))
    // }



    render(){
        const {count, incrementCount} = this.props;
        //const {count} = this.state;

        return(
            <div>
                <button type="button" onClick={incrementCount}>Clicked {count} times</button>
            </div>
        );
    }

}

export default ClickCounter;

*/
