// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";
const Header = () => {
  return (
    <header className="bg-dark text-white vw-100 site-header">
      <div className="container h-100 d-flex justify-content-between align-items-center">
        <h3 className="my-0">
          Site<span className="text-primary">Header</span>
        </h3>
        <button className="btn btn-secondary btn-resizing text-white fw-bold letter-spacing-1">
          Refresh Data
        </button>
      </div>
    </header>
  );
};

export default Header;
