// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSliders } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/searchSlice";
const Filters = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchValue);
  return (
    <section className="bg-white align-items-center w-100 filter-root">
      <div className="container h-100 d-flex justify-content-end align-items-center">
        {/* can consider some other filter below on a later commit here  */}
        {/* <FontAwesomeIcon icon={faSliders} /> */}
        <div className="search-bar">
          <button className="btn " type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => {
              dispatch(setSearchValue(e.target.value));
            }}
            className="form-control"
          />
        </div>
      </div>
    </section>
  );
};

export default Filters;
