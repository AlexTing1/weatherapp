import React, { useEffect } from 'react';
import axios from 'axios';

function App() {

  useEffect(() => {
    fetch('http://localhost:3001/weather/seattle')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(`could not fetch data: ${error}`))
  });

  return (
    <div>
      hello world!
    </div>
  );
}

export default App;
