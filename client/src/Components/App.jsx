import React, { useEffect, useState } from 'react';
import CityWeather from './CityWeather';

const cities = [
  "Seattle",
  "Los Angeles",
  "New York"
];

function App() {
  const [citiesWeather, setCitiesWeather] = useState([]);

  useEffect(() => {
    Promise.all(
      cities.map((city) => 
        fetch(`http://localhost:3001/weather/${city}`)
        .then((resp) => resp.json())
        .then((data) => ({ city, data }))
      )
    ).then((result) => {
      setCitiesWeather(result)
    })
  }, []);

  useEffect(() => {
    console.log(citiesWeather)
  }, [citiesWeather]);

  return (
    <ul>
      {citiesWeather.map((city) => (
        <li>
          <CityWeather city={city.city} temperature={city.data.current.temp_f} wind={city.data.current.wind_mph} />
        </li>
      ))}
    </ul>
  );
}

export default App;
