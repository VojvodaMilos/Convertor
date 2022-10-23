import { useState } from "react";
import "./App.css";
import img from "./img/arrow.png";

function App() {
  const [USDEUR, setUSDEUR] = useState(1);
  const [USDRSD, setUSDRSD] = useState(0);
  const [inputLeft, setInputLeft] = useState(1);
  // const [inputRight, setInputRight] = useState(1);
  const [inputLeftMoneu, setInputLeftMoneu] = useState("USD");
  const [inputRightMoneu, setInputRightMoneu] = useState("EUR");
  const [result, setResult] = useState(inputLeft * USDEUR);

  fetch(
    "http://www.apilayer.net/api/live?access_key=14b793e6c2439b574e2f1a322dc9fa0c&format=1&currencies=EUR,RSD"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));

  console.log(inputLeftMoneu);
  console.log(inputRightMoneu);
  console.log(inputLeft);
  console.log(inputLeft * USDEUR);
  console.log(USDEUR);
  return (
    <div className="converter">
      <h1>CYRRENCY CONVERTOR</h1>
      <div className="monete">
        <div className="left">
          <select
            onChange={(e) => {
              setInputLeftMoneu(e.target.value);
            }}
            name="monet"
            className="select"
          >
            <option value="USD">USD</option>
            <option value="RSD">RSD</option>
            <option value="EUR">EUR</option>
          </select>
          <input
            value={inputLeft}
            onChange={(e) => {
              setInputLeft(e.target.value);
            }}
            type="number"
            className="input"
          />
        </div>
        <img src={img} alt="" className="img" />
        <div className="right">
          <select
            onChange={(e) => {
              setInputRightMoneu(e.target.value);
            }}
            name="monet"
            className="select"
          >
            <option value="RSD">EUR</option>
            <option value="EUR">RSD</option>
            <option value="USD">USD</option>
          </select>
          <input value={result} type="number" className="input" />
        </div>
      </div>
      <div className="res">
        <button className="btn">Reset</button>
      </div>
    </div>
  );
}

export default App;
