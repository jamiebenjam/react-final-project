import { useEffect, useState } from 'react';
import './App.css';
import Map from './Map';
import table from './table1.jpeg';
import Town from './Town';
import { Route, Switch } from 'react-router-dom';
import Bank from './Bank';
import Clock from './Clock';



function App() {

  const [farmItems, setFarmItems] = useState([])
  const [count, setCount] = useState(0);

function fetchFarm() {
  fetch("http://localhost:8000/farm")
  .then((r) => r.json())
  .then((farmData) =>setFarmItems(farmData))
}

useEffect(fetchFarm, [])
 
  return (

    <div className="App">
      <Map />
      <Clock count={count} setCount={setCount}/>
      <img style={{height : 350, width: 550}}src={table}></img>
      <Switch>
        <Route exact path="/">
          <Bank />
        </Route>
        <Route path="/town">
          <Town farmItems={farmItems}/>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
