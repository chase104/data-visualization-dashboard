// eslint-disable-next-line no-unused-vars
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const ChartCard = ({ chartData }) => {
  // props validation

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="col-12 col-sm-6 col-md-4 mb-5">
      <div className="card">
        <div className="card-body d-flex justify-content-between">
          <h5 className="card-title">{chartData.datasets[0].label}</h5>
          <div>Icons section</div>
        </div>
        <div className="card-body">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
