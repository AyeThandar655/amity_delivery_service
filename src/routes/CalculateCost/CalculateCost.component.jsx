import {useState} from 'react';

import calculateCost from "../../util/calculateCost";

import "./CalculateCost.style.scss";

function CalculateCost() {
  const path = "AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1";
  const [routeData, setRouteData] = useState('');
  const [resultData, setResultData] = useState('');

  const onHandleChangeRoute = (event) => {
    setRouteData(event.target.value);
  }

  const onHandleSearch = () => {
    setResultData(calculateCost(path,routeData))
    setRouteData("");
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="input-container">
          <input value={routeData} onChange={onHandleChangeRoute} />
          <button onClick={onHandleSearch}>Calculate Cost</button> 
        </div>
        <div className="result-container">
          <p> The cost of delivery route : {resultData}</p>
        </div>
      </header>
    </div>
  );
}

export default CalculateCost;
