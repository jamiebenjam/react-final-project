import { useEffect, useState } from 'react';
import './App.css';
import Map from './Map';
import table from './table1.jpeg';
import Town from './Town';
import { Route, Switch } from 'react-router-dom';
import TheRanch from './TheRanch';
import Clock from './Clock';
import Garden from './Garden';
import Barn from './Barn';



function App() {

  const [farmItems, setFarmItems] = useState([])
  const [count, setCount] = useState(0);
  const [myFarmItems, setMyFarmItems] = useState([])
  const [bank, setBank] = useState("1200");

function fetchFarm() {
  fetch("http://localhost:8000/farm")
  .then((r) => r.json())
  .then((farmData) =>setFarmItems(farmData))
}

useEffect(fetchFarm, [])

console.log(myFarmItems)

const produceFilter = myFarmItems.filter((item) => item.type === "produce")

const livestockFilter = myFarmItems.filter((item) => item.type === "livestock")
 
  return (

    <div className="App">
      <Map />
      <Clock count={count} setCount={setCount}/>
      <img style={{height : 350, width: 550}}src={table}></img>
      <Switch>
        <Route exact path="/">
          <TheRanch bank={bank} />
        </Route>
        <Route path="/town">
          <Town farmItems={farmItems} setMyFarmItems={setMyFarmItems}/>
        </Route>
        <Route path="/garden">
          <Garden produceFilter={produceFilter} />
        </Route>
        <Route path="/barn">
          <Barn livestockFilter={livestockFilter} />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
