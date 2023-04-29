import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import { useCallback, useMemo, useState } from 'react';
import Title from './component/Title';
import ShowCount from './component/ShowCount';

function App() {

  const[count1, setCount1] = useState(0);
  const[count2, setCount2] = useState(0);

  // this method will change/reload based on dependency
  // here this function will be memoriezed for all time, no reload
  // new instance will not be created

  const incrementByOne = useCallback(()=>{
    setCount1((prevCount) => prevCount + 1);
  }, []); 

  const incrementByFive = useCallback(()=>{
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    return count1 % 2 === 0;
  }, [count1]); 
  // only change value if count1 change. 
  // Otherwise will give previous value
  // useMemo only memorize return value



  return (
    <div className="App">
      <Title/>
      <ShowCount count={count1} title="Counter 1" />
      <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
      <Button handleClick={incrementByOne}>Increment by one</Button>
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrementByFive}>Increment by five</Button>
    </div>
  );
}

export default App;
