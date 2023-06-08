import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';
import Counter from './components/Counter';
import Section from './components/Section';
import React from 'react';
import ThemeContext from './contexts/themeContext';


/*Note: 
Can use props drilling pattern to send props 
from one component to multiple layered component 
*/

export default class App extends React.Component {

  state = {
    theme: 'dark'
  };

  render() {
    const {theme} = this.state;

    return (
      <div className='app'>
        <Counter>
          {(counter, incrementCount) => (<ClickCounter
            count={counter} incrementCount={incrementCount} />
          )}
        </Counter>

        {/* Props drilling pattern: one component send to another ultimately recipient */}
        {/* <Section theme={theme}></Section> */}
        <ThemeContext.Provider value={{theme: theme}}> 
        <Section/>
        </ThemeContext.Provider>
      </div>
    );

  }
}

//export default App;
