// eslint-disable-next-line no-unused-vars
import React from "react";
import ChartCard from "../ChartCard";

const Dashboard = () => {
  // 10 biggest cities in the usa
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Power Consumption (kWh)",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  return (
    <section className="bg-light w-100 min-vh-100">
      <div className="container pt-5">
        <div className="row">
          {cities.map((item, index) => (
            <React.Fragment key={index}>
              <ChartCard key={index} chartData={chartData} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
