import { useReducer } from "react";

const intialState = 5;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};


export default function Counter() {

    const [count, dispatch] = useReducer(reducer, intialState);
    return (
        <div className="App">
            <div>Count - {count}</div>
            <button type='button' onClick={() => dispatch('increment')}>
                Increment
            </button>
            <button type='button' onClick={() => dispatch('decrement')}>
                Decrement
            </button>
        </div>
    );
}