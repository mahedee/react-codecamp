import { useReducer } from "react";

const intialState = 0;
const intialState2 = 5;
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


export default function CounterThree() {

    const [count, dispatch] = useReducer(reducer, intialState);
    const [count2, dispatch2] = useReducer(reducer, intialState2);
    return (
        <div>
        <div className="App">
            <div>Count - {count}</div>
            <button type='button' onClick={() => dispatch('increment')}>
                Increment
            </button>
            <button type='button' onClick={() => dispatch('decrement')}>
                Decrement
            </button>
        </div>

        <div className="App">
            <div>Count - {count2}</div>
            <button type='button' onClick={() => dispatch2('increment')}>
                Increment
            </button>
            <button type='button' onClick={() => dispatch2('decrement')}>
                Decrement
            </button>
        </div>

        </div>
    );
}