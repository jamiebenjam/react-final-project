import { dblClick } from '@testing-library/user-event/dist/click';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import table from './table1.jpeg';
import Town from './Town';

function App() {

  const [farmItems, setFarmItems] = useState([])

function fetchFarm() {
  fetch("http://localhost:8000/farm")
  .then((r) => r.json())
  .then((farmData) =>console.log(farmData))
}

useEffect(fetchFarm, [])
 
  return (
    <div className="App">
      <Header />
      <img src={table}></img>
      <Town farmItems={farmItems} />
    </div>
  );
}

export default App;
