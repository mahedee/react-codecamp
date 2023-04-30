import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ComplexCounter from './components/ComplexCounter';
import CounterThree from './components/CounterThree';
import React, { useReducer } from 'react';
import ComponentA from './components/ComponentB';

export const counterContext = React.createContext();

const intialState = 0;

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



function AppOld() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    // <Counter></Counter>
    // <ComplexCounter></ComplexCounter>
    // <CounterThree></CounterThree>

    <div className='app'>
      <div> Count: {count}</div>
      <counterContext.Provider value={{countDispatch: dispatch}}>
        <ComponentA />
      </counterContext.Provider>

    </div>

  );
}

export default App;
