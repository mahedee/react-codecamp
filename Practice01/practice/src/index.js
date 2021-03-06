import React, { cloneElement } from 'react';
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

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }

}

function UserGreeting(props){
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props){
  return <h1>Please sign up.</h1>
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;

  if(isLoggedIn){
    return <UserGreeting />;
  }
  return <GuestGreeting />;

}


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  

  handleLoginClick(){
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick(){
    this.setState({isLoggedIn: false});
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    }else{
      button = <LoginButton onClick = {this.handleLoginClick} />;
    }

    return(
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function WarningBanner(props){
  if(!props.warn){
    return null;
  }

  return(
    <div className="warning">
      Warning!
    </div>
  )
}

class Page extends React.Component{
  constructor(props){
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(){
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render(){
    return(
    <div>
      <WarningBanner warn={this.state.showWarning}/>
      <button onClick={this.handleToggleClick}>
        {this.state.showWarning ? 'Hide' : 'Show'}
      </button>
    </div>
    );
  }
}

function ListItem(props){
  return <li>{props.value}</li>;
}

function NumberList(props){
  const numbers = props.numbers;

  const listItems = numbers.map((number) =>
    <ListItem key ={number.toString()} value = {number}></ListItem>
  );

  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];


class NameForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: 'Coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('Your favorite fruit is: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay: 
          {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
          {/* <textarea value={this.state.value} onChange={this.handleChange} /> */}
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">GrapeFruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}


ReactDOM.render(
  // <h1>Hello, world!</h1>,
  //element,
  // <App/>,
  // <Toggle/>,
  // <Clock></Clock>,
  // <Greeting isLoggedIn={false} />,
  // <LoginControl></LoginControl>,
  // <Page></Page>,
  // <NumberList numbers={numbers}></NumberList>,
  <NameForm></NameForm>,
  document.getElementById('root')
);


