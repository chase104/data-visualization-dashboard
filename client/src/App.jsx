// eslint-disable-next-line no-unused-vars
import React from "react"; // We need to import React here because of Babel transpiling. Otherwise it will throw an error because "React is undefined" in the transpiled code.
import "./App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Filters />
      <Dashboard />
    </>
  );
}

export default App;
