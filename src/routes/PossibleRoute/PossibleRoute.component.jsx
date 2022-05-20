import {useState} from 'react';

import possibleRoute from "../../util/possibleRoute";

import "./PossibleRoute.style.scss";

function PossibleRoute() {
  const path = "AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1";
  const [startData, setStartData] = useState('');
  const [endData, setEndData] = useState('');
  const [stopData, setStopData] = useState('');
  const [resultData, setResultData] = useState('');

  const onHandleChangeStart = (event) => {
    setStartData(event.target.value);
  }

  const onHandleChangeEnd = (event) => {
    setEndData(event.target.value);
  }

  const onHandleChangeStop = (event) => {
    setStopData(event.target.value);
  }

  const onHandleSearch = () => {
    setResultData(possibleRoute(path,startData,endData,stopData))
    setStartData("");
    setEndData("");
    setStopData("");
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="input-container">
          <input value={startData} onChange={onHandleChangeStart} />
          <input value={endData} onChange={onHandleChangeEnd} />
          <input value={stopData} onChange={onHandleChangeStop} />
          <button onClick={onHandleSearch}>Possible Route</button> 
        </div>
        <div className="result-container">
          <p> Number of possible delivery route : {resultData}</p>
        </div>
      </header>
    </div>
  );
}

export default PossibleRoute;
