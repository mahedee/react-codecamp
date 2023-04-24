import { useState } from "react";

function TodoObject() {
    // Set default value of todo ''
    // useState method returns an array with two things, one is object 
    // and another is method to set that object. 
    // Use array destructing method

    const [todo, setTodo] = useState({
        title: '',
        description: ''
    });


    const { title, description } = todo;


    return (
        <div>
            <p>{title}</p>
            <p>
                <input type="text" value={title}
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            title: e.target.value,
                        })
                    }
                />

            </p>
            <p>
                <textarea name="todo" value={description}
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            description: e.target.value
                        })} />
            </p>
            <hr></hr>
        </div>
    );

}

export default TodoObject;