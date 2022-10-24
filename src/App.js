import { useEffect, useRef, useState } from "react";
import "./App.css";
import img from "./img/arrow.png";

function App() {
  const [inputLeft, setInputLeft] = useState(1);
  const [inputRight, setInputRight] = useState(null);
  const [inputLeftMoneu, setInputLeftMoneu] = useState("EUR");
  const [inputRightMoneu, setInputRightMoneu] = useState("RSD");
  const [rsd, setRsd] = useState(null);
  const [usd, setUsd] = useState(0);
  const inp1 = useRef();
  const inp2 = useRef();
  const sel1 = useRef();
  const sel2 = useRef();

  useEffect(() => {
    const data = fetch("https://api.exchangerate.host/latest")
      .then((response) => response.json())
      .then((data) => {
        setRsd(data.rates.RSD);
        setUsd(data.rates.USD);
        console.log("radiiiiii");
      });
  }, [inputLeft, inputRight, inputLeftMoneu, inputRightMoneu]);
  // console.log(inputRightMoneu);

  // console.log(inputLeftMoneu === "EUR");
  // console.log(inputRightMoneu === "USD");

  return (
    <div className="converter">
      <h1>CYRRENCY CONVERTOR</h1>
      <div className="monete">
        <div className="left">
          <select
            ref={sel1}
            onChange={(e) => {
              setInputLeftMoneu(e.target.value);
              // console.log(e.target.value);

              if (
                sel1.current.value === "USD" &&
                sel2.current.value === "EUR"
              ) {
                setInputRight(inp1.current.value * usd);
                inp2.current.value = inp1.current.value * usd;
              }

              if (
                sel1.current.value === "RSD" &&
                sel2.current.value === "EUR"
              ) {
                setInputLeft(inp1.current.value / rsd);
                inp2.current.value = inp1.current.value / rsd;
              }
              if (
                sel1.current.value === "EUR" &&
                sel2.current.value === "EUR"
              ) {
                inp2.current.value = inp1.current.value;
                // console.log("radi");
              }

              if (
                sel1.current.value === "USD" &&
                sel2.current.value === "USD"
              ) {
                inp2.current.value = inp1.current.value;
                // console.log("radi");
              }

              if (
                sel1.current.value === "RSD" &&
                sel2.current.value === "RSD"
              ) {
                inp2.current.value = inp1.current.value;
                // console.log("radi");
              }
              if (
                sel1.current.value === "EUR" &&
                sel2.current.value === "RSD"
              ) {
                inp2.current.value = inp1.current.value * rsd;
                // console.log("radi");
              }
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
                // console.log("radi");
                setInputLeft(e.target.value * rsd);
                inp2.current.value = e.target.value * usd;
              }
              if (inputLeftMoneu === "EUR" && inputRightMoneu === "EUR") {
                inp2.current.value = e.target.value;
                // console.log("radi");
              }

              if (
                sel1.current.value === "RSD" &&
                sel2.current.value === "EUR"
              ) {
                setInputRight(e.target.value / rsd);
                inp2.current.value = e.target.value / rsd;
              }

              if (
                sel1.current.value === "USD" &&
                sel2.current.value === "EUR"
              ) {
                setInputLeft(inp1.current.value * usd);
                inp2.current.value = inp1.current.value * usd;
              }
              if (
                sel1.current.value === "USD" &&
                sel2.current.value === "USD"
              ) {
                setInputLeft(inp1.current.value);
                inp2.current.value = inp1.current.value;
              }
              if (
                sel1.current.value === "RSD" &&
                sel2.current.value === "RSD"
              ) {
                setInputLeft(inp1.current.value);
                inp2.current.value = inp1.current.value;
              }
            }}
            type="number"
            className="input"
          />
        </div>
        <img
          onClick={() => {
            // console.log(sel2.current.value);

            setInputLeftMoneu(sel2.current.value);
            setInputRightMoneu(sel1.current.value);
            let a = sel1.current.value;
            sel1.current.value = sel2.current.value;
            sel2.current.value = a;
            if (sel1.current.value === "RSD" && sel2.current.value === "EUR") {
              setInputRight(inp1.current.value / rsd);
              inp2.current.value = inp1.current.value / rsd;
            }
            if (sel1.current.value === "EUR" && sel2.current.value === "RSD") {
              console.log("radi");
              setInputRight(inp1.current.value * rsd);
              inp2.current.value = inp1.current.value * rsd;
            }
            if (sel1.current.value === "USD" && sel2.current.value === "EUR") {
              console.log("radi");
              setInputRight(inp1.current.value * usd);
              inp2.current.value = inp1.current.value * usd;
            }
            if (sel1.current.value === "EUR" && sel2.current.value === "USD") {
              console.log("radi2222");
              setInputRight(inp1.current.value / usd);
              inp2.current.value = inp1.current.value / usd;
            }
          }}
          src={img}
          alt=""
          className="img"
        />
        <div className="right">
          <select
            ref={sel2}
            onChange={(e) => {
              if (
                sel1.current.value === "EUR" &&
                sel2.current.value === "USD"
              ) {
                setInputRight(inp2.current.value / usd);
                inp2.current.value = inp1.current.value / usd;
              }
              if (
                sel1.current.value === "EUR" &&
                sel2.current.value === "RSD"
              ) {
                setInputRight(inp2.current.value * rsd);
                inp2.current.value = inp1.current.value * rsd;
              }

              if (
                sel1.current.value === "USD" &&
                sel2.current.value === "EUR"
              ) {
                setInputRight(inp2.current.value * usd);
                inp2.current.value = inp1.current.value * usd;
              }
              if (
                sel1.current.value === "USD" &&
                sel2.current.value === "USD"
              ) {
                setInputRight(inp2.current.value);
                inp2.current.value = inp1.current.value;
              }
              if (
                sel1.current.value === "RSD" &&
                sel2.current.value === "EUR"
              ) {
                setInputRight(inp2.current.value / rsd);
                inp2.current.value = inp1.current.value / rsd;
              }
              if (
                sel1.current.value === "EUR" &&
                sel2.current.value === "EUR"
              ) {
                setInputRight(inp1.current.value);
                inp2.current.value = inp1.current.value;
              }

              setInputRightMoneu(e.target.value);
            }}
            name="monet"
            className="select"
          >
            <option value="RSD">RSD</option>
            <option value="EUR">EUR</option>
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
                setInputLeft(e.target.value * usd);
                inp1.current.value = e.target.value * usd;
              }
              if (inputLeftMoneu === "EUR" && inputRightMoneu === "EUR") {
                console.log("radi");
                inp1.current.value = e.target.value;
              }
              if (
                sel1.current.value === "USD" &&
                sel2.current.value === "USD"
              ) {
                setInputRight(inp2.current.value);
                inp1.current.value = inp2.current.value;
              }
              if (
                sel1.current.value === "RSD" &&
                sel2.current.value === "RSD"
              ) {
                setInputRight(inp2.current.value);
                inp1.current.value = inp2.current.value;
              }
            }}
            type="number"
            className="input"
          />
        </div>
      </div>
      <div className="res">
        <button
          className="btn"
          onClick={() => {
            inp1.current.value = 1;
            setInputLeft(1);
            sel1.current.value = "EUR";
            setInputLeftMoneu(sel1.current.value);
            inp2.current.value = inp1.current.value * rsd;
            setInputRight(inp1.current.value * rsd);
            sel2.current.value = "RSD";
            setInputRightMoneu(sel2.current.value * rsd);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
