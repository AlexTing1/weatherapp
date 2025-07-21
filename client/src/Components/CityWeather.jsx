import React from 'react';
import styles from '../styles/CityWeather.module.css';

function CityWeather({ temperature, city, wind }) {
    return (
        <div>
            <h1>{city}</h1>
            <h2>{temperature}</h2>
            <h2>{wind}</h2>
        </div>
    );
}

export default CityWeather;
