import React, { useState } from 'react';
import styles from '../styles/CityWeather.module.css';

function CityWeather({ temperature, city, wind }) {
    const [toEdit, setToEdit] = useState(false);
    const [cityText, setCityText] = useState(city);

    const [temperatureText, setTemperatureText] = useState(temperature);
    const [windText, setWindText] = useState(wind);

    function handleClick(e) {
        setToEdit(!toEdit);
    }

    return (
        <div className={styles.weatherContainer} onClick={handleClick}>
            <div className={styles.city}>
                {!toEdit ? <h1>{cityText}</h1> : <input value={cityText} onChange={(e) => setCityText(e.target.value)} autoFocus />}
            </div>
            <div className={styles.weatherDetails}>
                {!toEdit ? <h2>{temperatureText} F</h2> : <input value={temperatureText} onChange={(e) => setTemperatureText(e.target.value)} auutoFocus />}
                {!toEdit ? <h2>{windText} mph</h2> : <input value={windText} onChange={(e) => setWindText(e.target.value)} autoFocus />}
            </div>
        </div>
    );
}

export default CityWeather;
