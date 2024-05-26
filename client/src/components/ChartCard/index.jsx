// eslint-disable-next-line no-unused-vars
import React from "react";
import { Line, Bar, Pie, Doughnut, Radar, PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
const ChartCard = ({ chartData }) => {
  // props validation
  const [randomDecimal, setRandomDecimal] = React.useState(Math.random());
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  console.log(randomDecimal);
  let ChartComponent;
  switch (
    randomDecimal < 0.2
      ? "line"
      : randomDecimal < 0.4
      ? "bar"
      : randomDecimal < 0.6
      ? "pie"
      : randomDecimal < 0.8
      ? "doughnut"
      : randomDecimal < 0.9
      ? "radar"
      : "polarArea"
  ) {
    case "line":
      ChartComponent = Line;
      break;
    case "bar":
      ChartComponent = Bar;
      break;
    case "pie":
      ChartComponent = Pie;
      break;
    case "doughnut":
      ChartComponent = Doughnut;
      break;
    case "radar":
      ChartComponent = Radar;
      break;
    case "polarArea":
      ChartComponent = PolarArea;
      break;
    default:
      ChartComponent = Line;
  }
  return (
    <div className="col-12 col-sm-6 col-md-4 mb-5">
      <div className="card">
        <div className="card-body d-flex justify-content-between">
          <h5 className="card-title">{chartData.datasets[0].label}</h5>
          <div>Icons section</div>
        </div>
        <div className="card-body">
          <ChartComponent data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
