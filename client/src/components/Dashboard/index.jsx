// eslint-disable-next-line no-unused-vars
import React from "react";
import ChartCard from "../ChartCard";

const Dashboard = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
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
          {items.map((item, index) => (
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
