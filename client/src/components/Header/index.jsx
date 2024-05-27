// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/site_logo.png";

const Header = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <header className="bg-dark text-white w-100 site-header">
      <div className="container h-100 d-flex justify-content-between align-items-center">
        <div className="h-100 d-flex align-items-center">
          <img
            className="h-100  d-none d-sm-inline py-2 pe-2"
            src={Logo}
            alt="Logo"
          />
          <h3 className="my-0 h-100 d-flex align-items-center">
            Energy<span className="text-primary">Visualized</span>
          </h3>
          <p className="h-100 m-0 d-flex align-items-center ms-3">
            - Data curtosy of
            <a
              className="ms-1"
              href="https://developer.nrel.gov/docs/"
              target="_"
            >
              NREL api
            </a>
          </p>
        </div>
        <button
          className="btn btn-secondary btn-resizing text-white fw-bold letter-spacing-1"
          onClick={handleRefresh}
        >
          <span className="d-none d-sm-inline pe-2">Refresh Data</span>
          <FontAwesomeIcon icon={faSyncAlt} />
        </button>
      </div>
    </header>
  );
};

export default Header;
