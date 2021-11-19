import "./styles.css";
import React, { useState } from "react";

export default function App() {
  function stockQuantityHandler(event) {}

  function purcasePrice(event) {}
  function currentPrice(event) {}
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
    </div>
  );
}
