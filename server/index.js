const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const axios = require("axios");
require("dotenv").config();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/cities/solar", async (req, res) => {
  let cityNames = JSON.parse(req.query.cityNames);
  let cities = {};
  await Promise.all(
    cityNames.map(async (city) => {
      let apiResponse = await axios.get(
        `https://developer.nrel.gov/api/pvwatts/v8.json?api_key=${process.env.API_KEY}&azimuth=180&system_capacity=8&losses=14&array_type=1&module_type=0&gcr=0.4&dc_ac_ratio=1.2&inv_eff=96.0&radius=0&dataset=nsrdb&tilt=10&address=${city},%20co&soiling=12|4|45|23|9|99|67|12.54|54|9|0|7.6&albedo=0.3&bifaciality=0.7
        `
      );
      if (apiResponse.status !== 200) {
        cities[city] = null;
      } else {
        cities[city] = apiResponse.data;
      }
    })
  );
  // future improvement:  parse cityData to only include needed data like name, outputs, soiling, and station_info
  res.send(cities);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
