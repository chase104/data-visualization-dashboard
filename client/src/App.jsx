import React from "react"; // We need to import React here because of Babel transpiling. Otherwise it will throw an error because "React is undefined" in the transpiled code.
import "./App.css";

function App() {
  const testState = {
    message: "Test Bootstrap & SCSS",
  };
  return (
    <>
      <h1 className="pt-4 ps-3 text-primary primary">{testState?.message}</h1>
    </>
  );
}

export default App;
