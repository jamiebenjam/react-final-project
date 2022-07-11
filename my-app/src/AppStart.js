import "./App.css";
import Bank from "./bank.js";
import Farm from "./farm.js";
import House from "../components/house.js";
import Score from "./components/Score.js";
import Progress from "./Progress.js";
import Alerts from "./components/Score.js";
import { React, useState, useEffect } from "react";

function App() {
  const [bank, setBank] = useState("1200");
  const [PosiGrowthClock, setPosiGrowthClock] = useState("-50000");
  // const [ ,] = uesState([])
  // const [ ,] = uesState([])
  // const [ ,] = uesState([])
  // const [ ,] = uesState([])

  return (
    <>
      <Bank bank={bank} setBank={setBank} />
      <Farm />
      <House />
      <Score />
      <Progress />
      <Alerts />
    </>
  );
}

export default App;
