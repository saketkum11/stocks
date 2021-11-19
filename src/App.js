import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [stockQuantiy, setStockQuantiy] = useState(0);
  var [purcased, setPurcased] = useState(0);
  var [current, setCurrent] = useState(0);
  var [display, setDisplay] = useState("");
  var [message, setMessage] = useState("");
  var [status, setStatus] = useState("");

  function stockQuantityHandler(e) {
    var value = Number(e.target.value);
    console.log(value);

    setStockQuantiy(value);
  }

  function purcasePrice(event) {
    var value = Number(event.target.value);
    console.log(value);
    setPurcased(value);
  }
  function currentPrice(item) {
    var value = Number(item.target.value);
    console.log(value);
    setCurrent(value);
  }

  function clickHandler() {
    if (stockQuantiy !== "" && purcased !== "" && current !== "") {
      if (stockQuantiy > 0 && purcased > 0 && current > 0) {
        if (current > purcased) {
          var profite = (current - purcased) * stockQuantiy;
          var percentage = (profite / (purcased * stockQuantiy)) * 100;
          setStatus(percentage);
          setDisplay(profite);
          setMessage("Gained");
        } else if (purcased > current) {
          var loss = (purcased - current) * stockQuantiy;
          var lossed = (loss / (purcased * stockQuantiy)) * 100;

          setDisplay(loss);
          setMessage("Lossed");
          setStatus(lossed);
        }
      } else {
        setDisplay("enter positive value");

        setMessage("");
        setStatus("");
      }
    } else {
      setDisplay("Enter some value");
      setMessage("");
      setStatus("");
    }
  }
  return (
    <div className="App">
      <h1>Saket kumar</h1>

      <label>Stock Quantity</label>
      <input type="number" onChange={stockQuantityHandler} />
      <label>Purchased Price</label>
      <input type="number" onChange={purcasePrice} />
      <label>Current Price</label>
      <input type="number" onChange={currentPrice} />
      <button onClick={clickHandler}>Check</button>

      <h1
        style={{
          backgroundColor: "white",
          color: message === "Gained" ? "green" : "red"
        }}
      >
        {message} {display} {status}
      </h1>
    </div>
  );
}
