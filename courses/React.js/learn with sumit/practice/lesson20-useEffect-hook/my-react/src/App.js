import logo from './logo.svg';
import './App.css';
//import MyComponent from './components/MyComponentClass';
import MyComponent from './components/MyComponent';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <div>{show && <MyComponent/>}</div>
      <p>
        <button type='button' onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? 'Hide post' : 'Show post'}
        </button>
      </p>
    </div>
  );
}

export default App;
