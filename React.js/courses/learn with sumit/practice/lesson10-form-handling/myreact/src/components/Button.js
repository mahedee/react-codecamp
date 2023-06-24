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
        const {change, locale, show, enable} = this.props;

        // component will not load if enable is false
        // you cannot write return; in render method.
        
        if(!enable) return null;

        return(
            // We have to use fragement here. Because, here we are returning 2 element.
            // In react we can only return one element
           <> 
           <button type="button" onClick={() => change(locale)}>
                {locale === "bn-BD" ? "Change Clock" : "গড়ি পরিবর্তন করুন"}
            </button>
            
            {/* In javascript true && expression will return expression. false && expression will return false */}
            {show && <p>Hello</p>} 
            </>
        );
    }
}

export default Button;