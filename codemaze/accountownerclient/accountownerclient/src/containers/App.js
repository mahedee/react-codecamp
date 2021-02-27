import React, { Component } from "react";
import './App.css';
import Layout from '../components/Layout/Layout';
import Home from "../components/Home/Home";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NotFound from "../components/NotFound/NotFound";
//import Navigation from "../components/Navigation/Navigation"


class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Layout>
        {/* <Home/> */}
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
      </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
