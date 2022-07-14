  import React from "react";
  import Barden from "./Barden";
  import styled from "styled-components";
  

function Garden({produceFilter, setFarmItems, count, adult}) {

  const mapProduceItems = produceFilter.map((item) => {
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
    <GardenDetail>
    <div>
      <img src="https://i.redd.it/hprs7qwto2061.png"></img>
      <h1 className="garden-header">Garden</h1>
      {mapProduceItems}
    </div>
    </GardenDetail>
  )
}

export default Garden;

const GardenDetail = styled.div`
    // .garden-header {
    //     background-color: red;
    //     color: white;
       
    // }
   

`