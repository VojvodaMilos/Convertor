import { useEffect, useRef, useState } from "react";
import "./App.css";
import img from "./img/arrow.png";

function App() {
  const [inputLeft, setInputLeft] = useState(1);
  const [inputRight, setInputRight] = useState(null);
  const [inputLeftMoneu, setInputLeftMoneu] = useState("EUR");
  const [inputRightMoneu, setInputRightMoneu] = useState("RSD");
  const [result, setResult] = useState(0);
  const [rsd, setRsd] = useState(null);
  const [usd, setUsd] = useState(0);
  const inp1 = useRef();
  const inp2 = useRef();

  useEffect(() => {
    const data = fetch("https://api.exchangerate.host/latest")
      .then((response) => response.json())
      .then((data) => {
        setRsd(data.rates.RSD);
        setUsd(data.rates.USD);
      });
  }, []);
  // console.log(inputRightMoneu);
  console.log(inputLeftMoneu);

  return (
    <div className="converter">
      <h1>CYRRENCY CONVERTOR</h1>
      <div className="monete">
        <div className="left">
          <select
            onChange={(e) => {
              setInputLeftMoneu(e.target.value);
              console.log(e.target.value);
            }}
            name="monet"
            className="select"
          >
            <option value="EUR">EUR</option>
            <option value="RSD">RSD</option>
            <option value="USD">USD</option>
          </select>
          <input
            ref={inp1}
            defaultValue={inputLeft}
            onChange={(e) => {
              setInputLeft(e.target.value);
              if (inputLeftMoneu === "EUR" && inputRightMoneu === "RSD") {
                setInputRight(e.target.value * rsd);
                inp2.current.value = e.target.value * rsd;
              }
              if (inputLeftMoneu === "EUR" && inputRightMoneu === "USD") {
                console.log("radi");
                setInputLeft(e.target.value * rsd);
                inp2.current.value = e.target.value * usd;
              }
              if (inputLeftMoneu === "EUR" && inputRightMoneu === "EUR") {
                inp2.current.value = e.target.value;
                console.log("radi");
              }
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
              console.log(e.target.value);
            }}
            name="monet"
            className="select"
          >
            <option value="EUR">RSD</option>
            <option value="RSD">EUR</option>
            <option value="USD">USD</option>
          </select>
          <input
            ref={inp2}
            defaultValue={inputRightMoneu === "RSD" ? rsd : usd}
            onChange={(e) => {
              setInputRight(e.target.value);
              if (inputLeftMoneu === "EUR" && inputRightMoneu === "RSD") {
                setInputLeft(e.target.value / rsd);
                inp1.current.value = e.target.value / rsd;
              }
              if (inputLeftMoneu === "EUR" && inputRightMoneu === "USD") {
                console.log("radi");
                setInputLeft(e.target.value / rsd);
                inp1.current.value = e.target.value / usd;
              }
              if (inputLeftMoneu === "EUR" && inputRightMoneu === "EUR") {
                inp1.current.value = e.target.value;
              }
            }}
            type="number"
            className="input"
          />
        </div>
      </div>
      <div className="res">
        <button className="btn">Reset</button>
      </div>
    </div>
  );
}

export default App;
