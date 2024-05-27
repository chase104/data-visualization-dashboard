import { Line, Bar, Pie, Doughnut, Radar, PolarArea } from "react-chartjs-2";

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

const createCityArray = (graphSpecs, cities) => {
  let data = [];
  graphSpecs.cities.forEach((city) => {
    let cityData = cities[city];
    let cityOutput = cityData.outputs.ac_annual;
    data.push(cityOutput);
  });
  return data;
};

const getOutputByMonth = (graphSpecs, cities) => {
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
  console.log(cities, graphSpecs.cities[0], cities[graphSpecs.cities[0]]);
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

  const convertedData = {
    labels,
    datasets: [
      {
        label: graphSpecs.yTitle,
        backgroundColor: "rgba(66, 172, 225,0.2)",
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
