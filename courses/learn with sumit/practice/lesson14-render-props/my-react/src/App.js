import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';
import Counter from './components/Counter';

function App() {
  return (
    <div className='app'>
      {/* <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter> */}

      {/* Send a function with a parameter as props 
       This is called render prop
       render prop : prop that defines render logic
       not necessarily it name would be render. It can be anything
       */}
      {/* <User render={(isLoggedin) => isLoggedin ? "Mahedee" : "Guest"}/> */}
      {/* Send counter component a function name render with 2 parameter  */}
      {/* <Counter render={(counter, incrementCount) => <ClickCounter
        count={counter} incrementCount={incrementCount}></ClickCounter>} /> */}

      <Counter> 
      {(counter, incrementCount) => (<ClickCounter
        count={counter} incrementCount={incrementCount} />
      )}
      </Counter>
      
      {/* <Counter render={(counter, incrementCount) => <HoverCounter
        count={counter} incrementCount={incrementCount}></HoverCounter>} /> */}

      <Counter>
        {(counter, incrementCount) => (<HoverCounter
        count={counter} incrementCount={incrementCount} /> 
        )}
      </Counter>
    </div>
  );
}

export default App;
