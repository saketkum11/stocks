import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [stockQuantiy, setStockQuantiy] = useState(0);
  var [purcased, setPurcased] = useState(0);
  var [current, setCurrent] = useState(0);
  function stockQuantityHandler(event) {
    setStockQuantiy(event.target.value);
  }

  function purcasePrice(event) {
    setPurcased(event.target.value);
  }
  function currentPrice(event) {
    setCurrent(event.target.value);
  }
  function ClickHandler() {}
  return (
    <div className="App">
      <h1>Saket kumar</h1>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="number" onChange={stockQuantityHandler} />
      <input type="number" onChange={purcasePrice} />
      <input type="number" onChange={currentPrice} />
      <button onClick={ClickHandler}>Check</button>

      <h1>{stockQuantiy}</h1>
      <h1>{purcased}</h1>
      <h1>{current}</h1>
    </div>
  );
}
