import React, { useEffect, useState } from 'react'
import useWindowWidth from '../hooks/useWindowWidth'

export default function LayoutComponentTwo() {

    // used custom hook instead of following code
    const onSmallScreen = useWindowWidth(768);

    /*
   
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    const checkScreenSize = () => {
        // set true if window size is less then 768
        setOnSmallScreen(window.innerWidth < 768)
    }

    useEffect(()=>{
        checkScreenSize();

        // add resize event 
        // when we resize checkSreenSize method will be called
        window.addEventListener("resize", checkScreenSize);


        // Cleanup works
        return() => window.removeEventListener('resize', checkScreenSize);
    }, []);

    */


    return (
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h1>This is another component</h1>
        </div>
    )
}
