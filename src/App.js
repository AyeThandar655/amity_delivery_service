import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import CalculateCost from "./routes/CalculateCost/CalculateCost.component";
import PossibleRoute from "./routes/PossibleRoute/PossibleRoute.component";
import LowestCostRoute from "./routes/LowestCostRoute/LowestCostRoute.component";

function App() {
  return (
    <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<CalculateCost />} />
      <Route path='possibleRoute' element={<PossibleRoute />} />
      <Route path='lowestCostRoute' element={<LowestCostRoute />} />
    </Route>
   </Routes>
  );
}

export default App;
