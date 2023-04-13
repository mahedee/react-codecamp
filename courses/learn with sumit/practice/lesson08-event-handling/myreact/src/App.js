import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';

function App() {

  console.log("App component render");

  return (
    <div><Clock locale="bn-BD"></Clock></div>
  );
}

export default App;
