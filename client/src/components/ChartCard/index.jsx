/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faExpand } from "@fortawesome/free-solid-svg-icons";
import { convertData, getComponent } from "../../utils/dataManipulation";
import CustomSpinner from "../CustomSpinner";
import CustomTooltip from "../Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCity } from "../../redux/selectedCitySlice";

const ChartCard = ({ graphSpecs, isInsideOverlay, emptyState }) => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: graphSpecs.yTitle,
        },
      },
    },
  };

  // need to convert citydata to look like chartData

  let ChartComponent = getComponent(graphSpecs.type);
  let chartData;

  if (!emptyState) {
    chartData = convertData(graphSpecs, cities);
  }

  const handleClick = () => {
    console.log("clicked");
    dispatch(setSelectedCity({ chartData, graphSpecs }));
  };

  return (
    <div
      className={`col-12 ${
        !isInsideOverlay && "col-sm-6 col-md-6 col-lg-4"
      } mb-5`}
    >
      <div className="card custom-card h-100">
        <div className="card-body d-flex justify-content-between align-items-start">
          <div className="d-flex flex-column">
            <h5 className="card-title">{graphSpecs.title}</h5>
            <p className="card-subtitle text-muted">
              {graphSpecs.cities.length > 1
                ? "Multi-City"
                : graphSpecs.cities[0]}
            </p>
          </div>
          <div className="d-flex">
            {!isInsideOverlay && (
              <button className="btn btn-white fa-button" onClick={handleClick}>
                <FontAwesomeIcon icon={faExpand} />
              </button>
            )}

            <CustomTooltip tooltipText={graphSpecs.description}>
              <FontAwesomeIcon icon={faCircleInfo} />
            </CustomTooltip>
          </div>
        </div>
        <div className="card-body">
          {emptyState ? (
            <CustomSpinner />
          ) : (
            <ChartComponent data={chartData} options={options} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
