import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import ClockList from './components/ClockList';

function App() {

  //console.log("App component render");
  const quantities = [1, 2, 3];
  return (
    <div>
      {/* <Clock locale="bn-BD"></Clock> */}
      <ClockList quantities = {quantities} />
    </div>
  );
}

export default App;
