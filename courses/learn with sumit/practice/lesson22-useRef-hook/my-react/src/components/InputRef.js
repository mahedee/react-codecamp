import React from 'react'

// Here type and placeholder are props and ref is references
function InputRef({type, placeholder}, ref) {
    return <input ref={ref} type={type} placeholder={placeholder} />
}

const forwardedInput = React.forwardRef(InputRef);

export default forwardedInput;
