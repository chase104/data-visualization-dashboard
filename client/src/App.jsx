// eslint-disable-next-line no-unused-vars
import React from "react"; // We need to import React here because of Babel transpiling. Otherwise it will throw an error because "React is undefined" in the transpiled code.
import "./App.css";
import Header from "./components/Header";

function App() {
  const testState = {
    message: "Test Bootstrap & SCSS",
  };
  return (
    <>
      <Header />
      <h1 className="text-primary primary">{testState?.message}</h1>
    </>
  );
}

export default App;
