const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
const api = '1df87cdb26b21713ee449f7266c99f8d';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/weather/:city', (req, res) => {
  const { city } = req.params;
  axios.get(`api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}`)
    .then((resp) => res.send(resp.list))
    .catch((error) => res.send(error));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
