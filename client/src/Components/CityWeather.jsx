import React from 'react';
import styles from '../styles/CityWeather.module.css';

function CityWeather({ temperature, city, wind }) {
    return (
        <div className={styles.weatherContainer}>
            <div className={styles.city}>
                <h1>{city}</h1>
            </div>
            <div className={styles.weatherDetails}>
                <h2>{temperature} F</h2>
                <h2>{wind} mph</h2>
            </div>
        </div>
    );
}

export default CityWeather;
