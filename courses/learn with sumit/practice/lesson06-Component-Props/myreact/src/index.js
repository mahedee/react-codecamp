// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));

//  function Clock() {
//   return (
//     <h1 className='heading'>
//       <span className='text'>Hello {new Date().toLocaleTimeString()}</span>
//     </h1>
//   )
//  }

  // This one will work 
  //root.render(Clock()); 

  function Clock({locale}) {
    return (
      <h1 className='heading'>
        <span className='text'>Hello {new Date().toLocaleTimeString(locale)}</span>
      </h1>
    )
   }

   

  root.render(<Clock locale="bn-BD"/>)