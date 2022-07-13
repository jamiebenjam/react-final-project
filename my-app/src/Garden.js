  import React from "react";
  import Barden from "./Barden";
  

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
        
    
    />
})

  return (
    <div>
      {mapProduceItems}
    </div>
  )
}

export default Garden;
