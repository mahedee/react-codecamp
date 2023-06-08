import React from 'react';
//import logo from './logo.svg';
//import './App.css';

const App = ({lakesObj}) => (
  <div>
      <ul>
          {
              //lakes.map((lake, i) =>
              //<li key = {i}>{lake}</li>
          //)
          }
      </ul>
      <h2>Iterate list of objects</h2>
      <ul>
          {lakesObj.map(lakeObj =>
              <li key = {lakeObj.id}>{lakeObj.name} | {lakeObj.trailhead}</li>
          )}
      </ul>
  </div>
)



export default App;
