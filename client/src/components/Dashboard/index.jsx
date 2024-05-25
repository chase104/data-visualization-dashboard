// eslint-disable-next-line no-unused-vars
import React from "react";

const Dashboard = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];

  return (
    <section className="bg-light w-100 min-vh-100">
      <div className="container pt-5">
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
    </section>
  );
};

export default Dashboard;
