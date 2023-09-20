import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import { convert, toCelsius, toFahrenheit } from '../lib/converter';

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c' // Keep default celsius
    }

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale
        });
    }

    render() {
        const{temperature, scale} = this.state;

        const celsius = scale === 'f' ? convert(temperature, toCelsius): temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale='c' temperature={celsius}
                onTemperatureChange={this.handleChange} />
                <TemperatureInput scale='f' temperature={fahrenheit}
                onTemperatureChange={this.handleChange}/>
                {/* <fieldset>
                    <legend>Enter temperature in Celsius: </legend>
                    <input type='text' value={temperature} onChange={this.onTemperatureChanged} />

                </fieldset> */}

                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}