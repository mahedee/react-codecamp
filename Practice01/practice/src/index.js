import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const user = {
  firstName: 'Mahedee',
  lastName: 'Hasan'
};

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

// function tick(){
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render( element,
//     document.getElementById('root'));
// }

// setInterval(tick, 1000);

//const name = 'Mahedee Hasan';

const element = <h1>Hello, {formatName(user)}</h1>;



class Welcome extends React.Component {
  render(){
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function App(){
  return(
    <div>
      <Welcome name="Mahedee"></Welcome>
      <Welcome name = "Arisha"></Welcome>
      <Welcome name = "Hasan"></Welcome>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

const element2 = <Welcome name = "Arisha"></Welcome>;


class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

  }

  componentWillUnmount(){
    clearInterval(this.timerID);

  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  // <h1>Hello, world!</h1>,
  //element,
  <App></App>,
  // <Clock></Clock>,
  document.getElementById('root')
);


