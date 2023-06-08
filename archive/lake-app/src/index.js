import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const lakeObjList = [
  {id: "1", name: "Dhanmondi Lake", trailhead: "Is in Dhanmondi"},
  {id: "2", name: "Gulshan Lake", trailhead: "Is in Gulshan"},
  {id: "3", name: "Bashundhara Lake", trailhead: "Is in Bashundhara"},
];



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  //<App lakes={lakeList}/>,
  <App lakesObj = {lakeObjList} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
