import React from 'react';
import ReactDOM from 'react-dom';

const index = 0;
const element = (
    <h1 className="heading" tabIndex={index}>
        <span className="text">Hello world</span>
        {/* <img src=""/> */}
    </h1>
);

ReactDOM.render(element, document.getElementById('root'));
