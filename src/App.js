import "./App.css";
import img from "./img/arrow.png";

function App() {
  return (
    <div className="converter">
      <h1>CYRRENCY CONVERTOR</h1>
      <div className="monete">
        <div className="left">
          <select name="monet" className="select">
            <option value="RSD">RSD</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <input type="text" className="input" />
        </div>
        <img src={img} alt="" className="img" />
        <div className="right">
          <select name="monet" className="select">
            <option value="RSD">RSD</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <input type="text" className="input" />
        </div>
      </div>
      <div className="res">
        <button className="btn">Reset</button>
      </div>
    </div>
  );
}

export default App;
