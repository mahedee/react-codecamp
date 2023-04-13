import React from 'react';
import BoilingVerdict from './BoilingVerdict';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}: </legend>
            <input type='text' value={temperature}
                onChange={(e) => onTemperatureChange(e, scale)} />
        </fieldset>
    );
}