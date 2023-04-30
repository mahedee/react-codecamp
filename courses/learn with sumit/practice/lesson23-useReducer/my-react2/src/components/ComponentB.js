import React, { useContext } from 'react'
import { counterContext } from '../App'

export default function ComponentA() {
    
    const countContext = useContext(counterContext);

    return (
        <div>
            <div>Component A</div>

            <button type='button' onClick={() => countContext.countDispatch('increment')}>
                Increment
            </button>
            <button type='button' onClick={() => countContext.countDispatch('decrement')}>
                Decrement
            </button>
        </div>
    )
}
