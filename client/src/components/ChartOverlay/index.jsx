// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ChartCard from "../ChartCard";
import "./index.css";
import { setSelectedCity } from "../../redux/citiesSlice";

const ChartOverlay = () => {
  const dispatch = useDispatch();

  const { cities, selectedCity } = useSelector((state) => state.citiesSlice);
  const handleClose = () => {
    dispatch(setSelectedCity({}));
  };

  const show = Object.keys(selectedCity).length;
  return (
    <div>
      <Modal
        className="overlay-container"
        show={Object.keys(selectedCity).length}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {show && (
            <ChartCard
              graphSpecs={selectedCity.graphSpecs}
              cities={cities}
              emptyState={false}
              isInsideOverlay={true}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChartOverlay;
