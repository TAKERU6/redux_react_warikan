import React from "react";
import "../styles.css";
import Form from "./Form";
import Costs from "./Costs";

const App = () => {
  return (
    <div className="App">
      <h1>Splitting Cost</h1>
      <Form />
      <Costs />
    </div>
  );
};

export default App;
