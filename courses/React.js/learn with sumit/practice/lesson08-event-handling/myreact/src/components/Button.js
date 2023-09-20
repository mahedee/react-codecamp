import React from "react";

class Button extends React.Component{

    // shouldComponentUpdate hook takes nextProps 
    // we can check current props and nextProps
    // To suppress button component render multiple time 
    shouldComponentUpdate(nextProps){

        // rename change to currentChange which come from props
        const {change: currentChange, locale: currentLocale } = this.props;

        // rename change to nextChange which comes from nextProps of hook
        const {change: nextChange, locale: nextLocale} = nextProps;

        if(currentChange === nextChange && currentLocale === nextLocale){
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