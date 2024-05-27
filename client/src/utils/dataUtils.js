import { Line, Bar, Pie, Doughnut, Radar, PolarArea } from "react-chartjs-2";
import axios from "axios";
export const returnGraphs = (cities) => {
  const keys = Object.keys(cities);
  const graphs = [
    {
      type: "bar",
      comparisonType: "cities",
      yTitle: "AC Output (kWh)",
      title: "Average Annual Solar Output by City",
      description:
        "Average solar output generated when using 4 solar panels measured in kWh.",
      unit: "kWh",
      cities: keys,
    },
    {
      type: "line",
      comparisonType: "month",
      yTitle: "AC Output (kWh)",
      title: "Solar AC Output By Month",
      description:
        "Average solar output generated when using 4 solar panels within the city measured in kWh.",
      cities: [keys[0]],
    },
    {
      type: "pie",
      comparisonType: "soil",
      yTitle: "Percentage",
      title: "Solar Panel Captured Energy Potential",
      description:
        "The potential energy captured by the solar panels and the loss due to soiling by dust, dirt, and other particles.",
      unit: "kWh",
      cities: [keys[0]],
    },
  ];

  for (let i = 1; i < keys.length; i++) {
    graphs.push({
      type: i % 2 === 0 ? "bar" : "line",
      comparisonType: "month",
      yTitle: "AC Output (kWh)",
      title: `Solar AC Output By Month for ${keys[i]}`,
      description: `Average solar output generated using 4 solar panels within ${keys[i]} measured in kWh.`,
      cities: [keys[i]],
    });
  }
  return graphs;
};

export const getComponent = (type) => {
  switch (type) {
    case "line":
      return Line;
    case "bar":
      return Bar;
    case "pie":
      return Pie;
    case "doughnut":
      return Doughnut;
    case "radar":
      return Radar;
    case "polarArea":
      return PolarArea;
    default:
      return Line;
  }
};

export const createCityArray = (graphSpecs, cities) => {
  // here we loop through the cities in the graphSpecs.cities array and get the annual ac output
  let data = [];
  graphSpecs.cities.forEach((city) => {
    let cityData = cities[city];
    let cityOutput = cityData.outputs.ac_annual;
    data.push(cityOutput);
  });
  return data;
};

export const getOutputByMonth = (graphSpecs, cities) => {
  //geting the monthly ac output from the on city in the graphSpecs.cities array
  let data = [];
  let cityData = cities[graphSpecs.cities[0]];
  let monthlyOutput = cityData.outputs.ac_monthly;
  monthlyOutput.forEach((output) => {
    data.push(output);
  });
  return data;
};

const createSoilArray = (graphSpecs, cities) => {
  // array of 2 values, integer for soiling loss and integer for captured energy
  let data = [];
  let cityData = cities[graphSpecs.cities[0]];
  // just for january due to soiling[0]
  let soilingInteger = cityData.inputs.soiling[0];
  let capturedEnergy = 100 - soilingInteger;
  data.push(soilingInteger, capturedEnergy);
  return data;
};

export function convertData(graphSpecs, cities) {
  // if graphdata.cities has a length of one, then this chart is just for that one city.

  const monthLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let labels;
  let data;

  if (graphSpecs.comparisonType === "cities") {
    data = createCityArray(graphSpecs, cities);
    labels = graphSpecs.cities;
  } else if (graphSpecs.comparisonType === "month") {
    data = getOutputByMonth(graphSpecs, cities, monthLabels);
    labels = monthLabels;
  } else if (graphSpecs.comparisonType === "soil") {
    data = createSoilArray(graphSpecs, cities);
    labels = ["Loss due to soiling", "Captured Energy"];
  }
  let backgroundColor = ["rgba(66, 172, 225,0.2)"];
  if (graphSpecs.type === "pie" || graphSpecs.type === "doughnut") {
    backgroundColor = ["rgba(66, 172, 225,0.2)", "rgba(66, 172, 225,0.6)"];
  }
  const convertedData = {
    labels,
    datasets: [
      {
        label: graphSpecs.yTitle,
        backgroundColor,
        borderColor: "rgba(66, 172, 225,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data,
      },
    ],
  };

  return convertedData;
}

export const getCityData = async (keys) => {
  let cityData;
  let storageData = localStorage.getItem("solarData");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  if (storageData) {
    cityData = JSON.parse(storageData);
    await delay(1000); // 1-second delay
  } else {
    try {
      let response = await axios(
        `/server/cities/solar?cityNames=${encodeURIComponent(
          JSON.stringify(keys)
        )}`
      );
      cityData = response.data;
      // Optionally, save the data back to local storage for future use
      localStorage.setItem("solarData", JSON.stringify(cityData));
    } catch (err) {
      console.error("Failed to fetch city data:", err);
      cityData = null;
    }
  }

  return cityData;
};
