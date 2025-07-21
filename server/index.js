const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;
const api = 'bbdf1643ef55412b91704839252107';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/weather/:city', (req, res) => {
  const { city } = req.params;
  axios.get(`http://api.weatherapi.com/v1/current.json?key=${api}&q=${city}&aqi=no`)
    .then((resp) => res.send(resp.data))
    .catch((error) => res.send(error));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
