import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from '../contexts/themeContext'
import React, { useContext } from "react";


export default function Content() {
    
    // using useContext hook
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;

    console.log("Content rendered");

    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(counter, incrementCount) => (

                    <HoverCounter
                        count={counter}
                        incrementCount={incrementCount}
                        theme={theme}
                        switchTheme={switchTheme} />
                )}
            </Counter>
        </div>
    );
}



// Change function component to class component

/*
export default class Content extends React.Component {

    // React lifecycle method
    componentDidMount() {
        console.log(this.context)
    }

    render() {
        const { theme, switchTheme } = this.context;

        return (
            <div>
                <h1>This is a Content</h1>
                <Counter>
                    {(counter, incrementCount) => (
                        <HoverCounter
                            count={counter}
                            incrementCount={incrementCount}
                            theme={theme}
                            switchTheme={switchTheme} />
                    )}
                </Counter>
            </div>
        );
    }
}

// ThemeContext will be available in this Context class
Content.contextType = ThemeContext;

*/