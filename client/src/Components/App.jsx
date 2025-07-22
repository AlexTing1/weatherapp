import React, { useEffect, useState } from 'react';
import CityWeather from './CityWeather';
import styles from '../styles/App.module.css'

const cities = [
  "Seattle",
  "Los Angeles",
  "New York"
];

function App() {
  const [citiesWeather, setCitiesWeather] = useState([]);
  const [cityText, setCityText] = useState('');
  const [temperatureText, setTemperatureText] = useState('');
  const [windText, setWindText] = useState('');

  useEffect(() => {
    Promise.all(
      cities.map((city) => 
        fetch(`http://localhost:3001/weather/${city}`)
        .then((resp) => resp.json())
        .then((data) => {
          const weatherData = {
            city: city,
            temperature: data.current.temp_f,
            wind: data.current.wind_mph
          }
          return weatherData
        })
      )
    ).then((result) => {
      console.log(result)
      setCitiesWeather(result)
    })
  }, []);

  useEffect(() => {
    console.log(citiesWeather)
  }, [citiesWeather]);

  function handleSubmit(e) {
    e.preventDefault();
    const city = {
      city: cityText,
      temperature: temperatureText,
      wind: windText
    }
    setCitiesWeather([...citiesWeather, city])
  }

  return (
    <div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            City
            <input onChange={(e) => setCityText(e.target.value)} value={cityText} />
          </label>
          <label>
            Temperature
            <input onChange={(e) => setTemperatureText(e.target.value)} value={temperatureText} />
          </label>
          <label>
            Wind
            <input onChange={(e) => setWindText(e.target.value)} value={windText} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <ul className={styles.list}>
        {citiesWeather.map((city) => (
          <li>
            <CityWeather city={city.city} temperature={city.temperature} wind={city.wind} />
          </li>
        ))}
      </ul>
    </div>

  );
}

export default App;
