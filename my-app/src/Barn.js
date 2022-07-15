import React from "react";
import Barden from "./Barden";

function Barn({livestockFilter, setFarmItems, count, adult, speed}) {
    if(!speed) {
        alert("Please return to Codee Ranch and select a speed")
    } else {

  const mapLivestockItems = livestockFilter.map((item) => {
    return <Barden
        item={item}
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        type={item.type}
        setFarmItems={setFarmItems}
        count={count}
        
    
    />
})
    return (
        <div>
            <img className="marketpic" src="https://cdnb.artstation.com/p/assets/images/images/045/035/031/large/joshua-white-barn.jpg?1641774675"></img>
            <h1>Barn</h1>
            <div id="container">
                <ul className="farmList"> {mapLivestockItems}</ul>
            </div>
        </div>
    )
}}

export default Barn;