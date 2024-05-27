// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCity } from "../../redux/selectedCitySlice";
import ChartCard from "../ChartCard";
import "./index.css";

const ChartOverlay = () => {
  const dispatch = useDispatch();

  const selectedCity = useSelector((state) => state.selectedCity);

  const cities = useSelector((state) => state.cities);
  console.log(selectedCity);
  const handleClose = () => {
    dispatch(setSelectedCity(null));
  };

  return (
    <div>
      <Modal
        className="overlay-container"
        show={selectedCity !== null}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {selectedCity && (
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
