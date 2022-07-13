import { useEffect, useState } from "react";
import "./App.css";
import Map from "./Map";
import table from "./table1.jpeg";
import Town from "./Town";
import { Route, Switch } from "react-router-dom";
import TheRanch from "./TheRanch";
import Clock from "./Clock";
import Garden from "./Garden";
import Barn from "./Barn";
import Music from "./CodeeRanchTheme.mp3"
import AudioPlayer from "./AudioPlayer"

function App() {
  const [farmItems, setFarmItems] = useState([]);
  const [count, setCount] = useState(1);
  const [myFarmItems, setMyFarmItems] = useState([]);
  const [bank, setBank] = useState(10);
  const [speed, setSpeed] = useState(null);

  function fetchFarm() {
    fetch("http://localhost:3000/farm")
      .then((r) => r.json())
      .then((farmData) => setFarmItems(farmData));
  }
  useEffect(fetchFarm, []);

  
  const produceFilter = myFarmItems.filter((item) => item.type === "produce");

  const livestockFilter = myFarmItems.filter(
    (item) => item.type === "livestock"
  );

  // Handle Buy/Sell
  function handleBuy(buy) {

    const foundItem = myFarmItems.find((item) => item.id === buy.id)

    if (!foundItem) {
      alert(
              `Your ${buy.name} will be added to your ${
                buy.type === "produce" ? "Garden" : "Barn"
              }.`
            );
            const leftOver = farmItems.filter((item) => {
              if (item.id !== buy.id) {
                return item;
              }
            });
            
            return setMyFarmItems((prevState) => [...prevState, buy]),
            setFarmItems(leftOver),
            setBank((monies) => monies - buy.price)
    } else return alert(`You have already purchased your ${buy.name}. Try purchasing something you don't already own.`)       
  }

  function handleSell(sell) {
    let adult = (sell.birthday + sell.mature)
    if (adult >= count) {
      return alert(`Your ${sell.name} is not old enough to take to market. Please wait ${adult - count} days.`)
    }
    console.log("Sailed");
    const leftOver = myFarmItems.filter((item) => {
      if (item.id !== sell.id) {
        return  item;
      }
    });
    return setMyFarmItems(leftOver),
            setBank((monies) =>(monies + sell.price*((count - adult) * sell.roi))),
            alert(`You have sold your ${sell.name} for $${((sell.price)*((count - adult) * sell.roi)).toFixed(2)}!`),
            setFarmItems((items) => ([...items, sell]))
  }



  return (
    <div className="App">
      <AudioPlayer music={Music}/>
      <Map />
      <Clock speed={speed} count={count} setCount={setCount} />
      <img style={{ height: 350, width: 550 }} src={table}></img>
      <Switch>
        <Route exact path="/">
          <TheRanch setSpeed={setSpeed} speed={speed} bank={bank} />
        </Route>
        <Route path="/town">
          <Town
            count={count}
            bank={bank}
            setBank={setBank}
            poster={setFarmItems}
            setFarmItems={handleBuy}
            farmItems={farmItems}
            setMyFarmItems={setMyFarmItems}
          />
        </Route>
        <Route path="/garden">
          <Garden produceFilter={produceFilter} setFarmItems={handleSell} />
        </Route>
        <Route path="/barn">
          <Barn livestockFilter={livestockFilter} setFarmItems={handleSell} />
        </Route>
      </Switch>
      <audio src="./CodeeRanchTheme.mp3"></audio>
    </div>
  );
}

export default App;
