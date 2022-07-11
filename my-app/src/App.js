import { dblClick } from '@testing-library/user-event/dist/click';
import { useEffect } from 'react';
import './App.css';
import Header from './Header';
import table from './table1.jpeg';
import FarmData from './db.json';

function App() {

function fetchFarm() {
  fetch('./db.json')
  .then((r) => r.json())
  .then((farmData) =>console.log(farmData))
}

useEffect(fetchFarm, [])
 
  return (
    <div className="App">
      <Header />
      <img src={table}></img>
    </div>
  );
}

export default App;
