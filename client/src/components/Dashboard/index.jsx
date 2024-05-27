// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCitiesData } from "../../redux/citiesSlice";
import ChartCard from "../ChartCard";
import axios from "axios";

const Dashboard = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);
  const searchValue = useSelector((state) => state.searchValue);
  let keys = Object.keys(cities);
  let emptyState = cities[keys[0]] === null;

  const graphs = [
    {
      type: "bar",
      comparisonType: "cities",
      yTitle: "AC Output (kWh)",
      title: "Average Annual Solar Output by City",
      description:
        "Average solar output generated when using 4 solar panels in kWh.",
      unit: "kWh",
      cities: keys,
    },
    {
      type: "line",
      comparisonType: "month",
      yTitle: "AC Output (kWh)",
      title: "Solar AC Output By Month",
      description:
        "Average solar output generated when using 4 solar panels in kWh within the city.",
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
      description: `Average solar output generated using 4 solar panels in kWh within ${keys[i]}.`,
      cities: [keys[i]],
    });
  }

  console.log(graphs);

  const returnUiGraphs = (searchValue, graphs) => {
    let uiGraphs = [];
    graphs.forEach((graph) => {
      if (
        graph.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        graph.cities.some((city) => city.toLowerCase().includes(searchValue))
      ) {
        uiGraphs.push(graph);
      }
    });
    return uiGraphs;
  };

  // produce uiGraphs by searching for a partial match on the title or any of the cities in cities array
  let uiGraphs = searchValue ? returnUiGraphs(searchValue, graphs) : graphs;

  // I can initiate the data call here on first render if there is no data in the slice.
  useEffect(() => {
    if (emptyState) {
      if (localStorage.getItem("solarData")) {
        let data = JSON.parse(localStorage.getItem("solarData"));
        setTimeout(() => {
          // timeout to simulate a network delay
          dispatch(setCitiesData(data));
        }, [1000]);
      } else {
        axios(`/server/cities/solar?cityNames=${JSON.stringify(keys)}`).then(
          (res) => {
            localStorage.setItem("solarData", JSON.stringify(res.data));
            dispatch(setCitiesData(res.data));
          }
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities]);

  return (
    <section className="bg-light w-100 min-vh-100">
      <div className="container pt-5">
        <div className="row">
          {uiGraphs.map((graphSpecs, index) => (
            <React.Fragment key={graphSpecs.title + index}>
              <ChartCard
                graphSpecs={graphSpecs}
                cities={cities}
                showExpand={true}
                emptyState={emptyState}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
