import React from "react";

class Button extends React.Component{

    // To suppress button component render multiple time
    shouldComponentUpdate(nextProps){
        const {change: currentChange } = this.props;
        const {change: nextChange} = nextProps;

        if(currentChange === nextChange){
            return false;
        }
        return true;
    }

    render(){
        console.log("Button component render");
        const {change, locale} = this.props;
        return(
            <button type="button" onClick={() => change(locale)}>
                Click here
            </button>
        );
    }
}

export default Button;