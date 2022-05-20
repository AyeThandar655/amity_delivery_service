import {useState} from 'react';

import lowestCostRoute from "../../util/lowestCostRoute";

import "./LowestCostRoute.style.scss";

function LowestCostRoute() {
  const path = "AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1";
  const stopData = '';
  const [startData, setStartData] = useState('');
  const [endData, setEndData] = useState('');
  const [resultData, setResultData] = useState('');

  const onHandleChangeStart = (event) => {
    setStartData(event.target.value);
  }

  const onHandleChangeEnd = (event) => {
    setEndData(event.target.value);
  }

  const onHandleSearch = () => {
    setResultData(lowestCostRoute(path,startData,endData,stopData))
    setStartData("");
    setEndData("");
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="input-container">
          <input value={startData} onChange={onHandleChangeStart} />
          <input value={endData} onChange={onHandleChangeEnd} />
          <button onClick={onHandleSearch}>Lowest Cost Route</button> 
        </div>
        <div className="result-container">
          <p> The cheapest cost : {resultData}</p>
        </div>
      </header>
    </div>
  );
}

export default LowestCostRoute;
