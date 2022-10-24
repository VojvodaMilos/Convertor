import { useEffect, useRef, useState } from "react";
import "./App.css";
import img from "./img/arrow.png";

function App() {
  const [inputLeft, setInputLeft] = useState(1);
  const [inputRight, setInputRight] = useState(null);
  const [inputLeftMoneu, setInputLeftMoneu] = useState("EUR");
  const [inputRightMoneu, setInputRightMoneu] = useState("RSD");

  useEffect(() => {
    const data = fetch("https://api.exchangerate.host/latest")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, [inputLeftMoneu, inputRightMoneu]);

  return (
    <div className="converter">
      <h1>CYRRENCY CONVERTOR</h1>
      <div className="monete">
        <div className="left">
          <select name="monet" className="select">
            <option value="EUR">EUR</option>
            <option value="RSD">RSD</option>
            <option value="USD">USD</option>
          </select>
          <input
            value={inputLeft}
            onChange={(e) => setInputLeft(e.target.value)}
            type="number"
            className="input"
          />
        </div>
        <img
          // onClick={() => {
          //   // console.log(sel2.current.value);

          //   setInputLeftMoneu(sel2.current.value);
          //   setInputRightMoneu(sel1.current.value);
          //   let a = sel1.current.value;
          //   sel1.current.value = sel2.current.value;
          //   sel2.current.value = a;
          //   if (sel1.current.value === "RSD" && sel2.current.value === "EUR") {
          //     setInputRight(inp1.current.value / rsd);
          //     inp2.current.value = inp1.current.value / rsd;
          //   }
          //   if (sel1.current.value === "EUR" && sel2.current.value === "RSD") {
          //     console.log("radi");
          //     setInputRight(inp1.current.value * rsd);
          //     inp2.current.value = inp1.current.value * rsd;
          //   }
          //   if (sel1.current.value === "USD" && sel2.current.value === "EUR") {
          //     console.log("radi");
          //     setInputRight(inp1.current.value * usd);
          //     inp2.current.value = inp1.current.value * usd;
          //   }
          //   if (sel1.current.value === "EUR" && sel2.current.value === "USD") {
          //     console.log("radi2222");
          //     setInputRight(inp1.current.value / usd);
          //     inp2.current.value = inp1.current.value / usd;
          //   }
          // }}
          src={img}
          alt=""
          className="img"
        />
        <div className="right">
          <select name="monet" className="select">
            <option value="RSD">RSD</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <input type="number" className="input" />
        </div>
      </div>
      <div className="res">
        <button className="btn">Reset</button>
      </div>
    </div>
  );
}

export default App;
