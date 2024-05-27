// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSliders } from "@fortawesome/free-solid-svg-icons";
const Filters = () => {
  return (
    <section className="bg-white align-items-center w-100 filter-root">
      <div className="container h-100 d-flex justify-content-between align-items-center">
        {/* row here  */}
        <FontAwesomeIcon icon={faSliders} />
        <div className="search-bar">
          <button className="btn " type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input type="text" className="form-control" />
        </div>
      </div>
    </section>
  );
};

export default Filters;
