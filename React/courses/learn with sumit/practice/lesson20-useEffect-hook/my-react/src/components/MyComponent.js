import React, { useEffect, useState } from 'react'

export default function MyComponent() {

    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () =>{
        console.log(`Clock ticking`);
        setDate(new Date());
    }

    useEffect(()=>{
        console.log("Updating document title");
        document.title = `Clicked ${count} times`;
    }, [count]); // Rerender based on dependency array

    // No dependency 
    // Run on every change both date and count. run all time
    // but if you use [] in dependency it will call only once on load
    useEffect(()=>{
        console.log("Use effect for clock");
        const interval = setInterval(tick, 1000);

        // do the cleanup - stop the timer
        // retun only call of component unmount
        return () => {
            console.log('Component unmounted');
            clearInterval(interval);
        }

    }, []); // [] it will call only once like component did mount

    const addClick = () =>{
        setCount((prevCount)=>(prevCount + 1));
    }

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
        </div>
    )
}
