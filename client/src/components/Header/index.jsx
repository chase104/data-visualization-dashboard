// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/site_logo.png";

const Header = () => {
  return (
    <header className="bg-dark text-white w-100 site-header">
      <div className="container h-100 d-flex justify-content-between align-items-center">
        <h3 className="my-0 h-100 d-flex align-items-center">
          <img
            className="h-100  d-none d-sm-inline py-2 pe-2"
            src={Logo}
            alt="Logo"
          />
          Site<span className="text-primary">Header</span>
        </h3>
        <button className="btn btn-secondary btn-resizing text-white fw-bold letter-spacing-1">
          <span className="d-none d-sm-inline pe-2">Refresh Data</span>
          <FontAwesomeIcon icon={faSyncAlt} />
        </button>
      </div>
    </header>
  );
};

export default Header;
