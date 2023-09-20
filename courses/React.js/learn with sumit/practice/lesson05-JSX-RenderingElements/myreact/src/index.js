import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Exmaple : 1
// const index = 0;
// const element = (
//   <h1 className='heading' tabIndex={index}>
//     <span className='text'>Hello {new Date().toLocaleTimeString()}</span>
//   </h1>
// );


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

const index = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=>{
  const element = (
  <h1 className='heading' tabIndex={index}>
    <span className='text'>Hello {new Date().toLocaleTimeString()}</span>
  </h1>
);
root.render(element);

}, 1000);