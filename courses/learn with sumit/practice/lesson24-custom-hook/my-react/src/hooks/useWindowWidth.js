import React, { useEffect, useState } from 'react'

const useWindowWidth = (screenSize) => {
    const [onSmallScreen, setOnSmallScreen] =  useState(false);

    // const checkScreenSize = () => {
    //     // set true if window size is less then 768
    //     setOnSmallScreen(window.innerWidth < screenSize)
    // }

    useEffect(()=>{

        const checkScreenSize = () => {
            // set true if window size is less then 768
            setOnSmallScreen(window.innerWidth < screenSize)
        }
        
        checkScreenSize();

        // add resize event 
        // when we resize checkSreenSize method will be called
        window.addEventListener("resize", checkScreenSize);


        // Cleanup works
        return() => window.removeEventListener('resize', checkScreenSize);
    }, [screenSize]);

    return onSmallScreen;
}

export default useWindowWidth;