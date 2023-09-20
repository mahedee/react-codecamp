import React, { useEffect, useState } from 'react'

export default function LayoutComponentOne() {

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

    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>

        </div>
    )
}
