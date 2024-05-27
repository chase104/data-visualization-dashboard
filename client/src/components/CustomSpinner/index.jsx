/* eslint-disable no-unused-vars */
import React from "react";
import "./index.css";
import SiteLogo from "../../assets/site_logo.png";

const CustomSpinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <img className="spinner-container" src={SiteLogo} alt="Spinner" />
    </div>
  );
};

export default CustomSpinner;
