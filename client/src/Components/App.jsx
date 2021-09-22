import React, { useEffect } from 'react';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get('/weather/Seattle')
      .then((resp) => {
        console.log(resp);
      });
  });

  return (
    <div>
      hello world
    </div>
  );
}

export default App;
