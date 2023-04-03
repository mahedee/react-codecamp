// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';



   
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


  // Example 2:
  // function Clock({locale}) {
  //   return (
  //     <h1 className='heading'>
  //       <span className='text'>Hello {new Date().toLocaleTimeString(locale)}</span>
  //     </h1>
  //   )
  //  }


  // root.render(<Clock locale="bn-B D"/>)

  // Exaple 3:
  class Clock extends React.Component{
    render(){
      return(
      <h1 className='heading'>
        <span className='text'>Hello - {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}</span>
      </h1>
      );
    }
  }

  root.render(<Clock locale="bn-BD">test</Clock>);