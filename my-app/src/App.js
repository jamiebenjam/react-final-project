import { useEffect, useState } from "react";
import "./App.css";
import Map from "./Map";
import Town from "./Town";
import { Route, Switch } from "react-router-dom";
import TheRanch from "./TheRanch";
import Clock from "./Clock";
import Garden from "./Garden";
import Barn from "./Barn";
import Music from "./CodeeRanchTheme.mp3"
import AudioPlayer from "./AudioPlayer"
import LeaderBoard from "./LeaderBoard";
// import { Container } from "semantic-ui-react";

function App() {
  const [farmItems, setFarmItems] = useState([]);
  const [count, setCount] = useState(1);
  const [myFarmItems, setMyFarmItems] = useState([]);
  const [bank, setBank] = useState(24999);
  const [speed, setSpeed] = useState(null);
  const [name, setName] = useState("")
  const [highScore, setHighScore] = useState([])
  const [winners, setWinners] = useState([])
  const [winnerTrap, setWinnerTrap] = useState(false)

  


  useEffect(() => {
    let userName = window.prompt("Hi welcome to Codee Ranch!", "Enter Player 1 first name");
    setName(userName)}, 
    [])
    

  useEffect(() => {fetch("http://localhost:3000/leaderboard").then((r)=> r.json()).then((data) => setHighScore(data))},
  [])

  function fetchFarm() {
    fetch("http://localhost:3000/farm")
      .then((r) => r.json())
      .then((farmData) => setFarmItems(farmData));
  }
  useEffect(fetchFarm, []);
  
  if (count >= 150 && bank < 30000) {
    return alert(`${name}, I don't know that farming is for you......#learnToCode(e)?`)
  } else {

  
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
            alert(`You have sold your ${sell.name} for $${((sell.price)*((count - adult) * sell.roi)).toFixed(2)}💸!`),
            setFarmItems((items) => ([...items, sell]))
  }
 // High Score Stuff
 
 
 function finisher() {
  if (winnerTrap === false) {
  const codeeFamTree = {
    name: name,
    highScore: bank.toFixed(2),
    GameSpeed: speed,
    day: count,
    
  }
  setWinnerTrap(true)
  setWinners(codeeFamTree)
  console.log(codeeFamTree)
  fetch("http://localhost:3000/leaderboard", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({name: "test"}),
})
.then((r) => r.json())
.then((data) => setHighScore((prevState) => ([...prevState, data])))
} else {
  return null
}}


  return (
    <body>
      <div className="App">
        <AudioPlayer user={name} music={Music}/>
        <Map bank={bank} user={name} finisher={finisher}/>
        <Clock speed={speed} count={count} setCount={setCount} />
        <Switch>
          <Route exact path="/">
            <TheRanch setSpeed={setSpeed} speed={speed} bank={bank} user={name} />
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
              speed={speed}
            />
          </Route>
          <Route path="/garden">
            <Garden produceFilter={produceFilter} setFarmItems={handleSell} count={count} speed={speed} />
          </Route>
          <Route path="/barn">
            <Barn livestockFilter={livestockFilter} setFarmItems={handleSell} count={count} speed={speed} />
          </Route>
          <Route path="/leaderBoard">
          <LeaderBoard winners={winners}/>
          </Route>
        </Switch>
        <audio src="./CodeeRanchTheme.mp3"></audio>
      </div>
    </body>
  );
}
}

export default App;
