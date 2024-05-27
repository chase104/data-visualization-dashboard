// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const CustomTooltip = ({ children, tooltipText, placement = "left" }) => {
  const [show, setShow] = useState(false);
  const tooltipRef = useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  const handleClickOutside = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <button
      ref={tooltipRef}
      onClick={handleClick}
      className="btn btn-white fa-button"
    >
      <OverlayTrigger
        show={show}
        placement={placement}
        overlay={<Tooltip id="custom-tooltip">{tooltipText}</Tooltip>}
      >
        <div
          ref={tooltipRef}
          style={{ cursor: "pointer", display: "inline-block" }}
        >
          {children}
        </div>
      </OverlayTrigger>
    </button>
  );
};

export default CustomTooltip;
