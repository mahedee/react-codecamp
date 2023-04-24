import { useState } from "react";
import Todo from "./Todo";
import TodoObject from "./TodoObject";

function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div>
             <Todo></Todo>
             <TodoObject></TodoObject>

            {count}
            <p>
                
                {/* <button type="button" onClick={() => setCount(count+1)}> */}
                {/* The above is not the right approach. and, you can not handle
                if you need to handle previous state. so do like below */}
                <button type="button" onClick={()=> 
                    setCount((prevState) => prevState + 1)}>
                    Add 1
                </button>

               
            </p>
        </div>
    );

}

export default Counter;