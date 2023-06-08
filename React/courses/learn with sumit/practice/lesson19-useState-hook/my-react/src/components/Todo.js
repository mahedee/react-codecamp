import { useState } from "react";

function Todo() {
    // Set default value of todo ''
    // useState method returns an array with two things, one is object 
    // and another is method to set that object. 
    // Use array destructing method

    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    // since it is in function use const
    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js') ? 'You need JavaScript skill to complete the task. Do you have it?' : null;

        // call setTodo and setWarning method to set value of todo and warning
        // it also call rerender fuction. since, new value set and changed.
        setTodo(inputValue);
        setWarning(updatedWarning);


    };

    return(
        <div>
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput} />
            </p>
            <hr></hr>
            <h2>{warning || 'Good choice!'}</h2>
        </div>
    );

}

export default Todo;