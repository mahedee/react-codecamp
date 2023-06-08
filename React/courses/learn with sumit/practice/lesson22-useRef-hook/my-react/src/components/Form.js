import { useEffect, useRef } from 'react'

export default function Form() {

    const inputRef = useRef(null);
    const forwardRef = useRef(null);

    useEffect(()=>{
        //console.log(inputRef.current);
        //inputRef.current.focus();

        forwardRef.current.focus();
    }, []); // will call only once at the time of load

    return (
        <div>
            <p>
                <input ref={inputRef} type='text' 
                placeholder='enter something' />

                {/* send ref to child components */}
                <input ref={forwardRef} type='text' 
                placeholder='enter something for forward ref' />
            </p>
        </div>
    );
}
