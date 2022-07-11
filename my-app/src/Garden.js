  import React from "react";
  import FarmItems from "./FarmItems";

function Garden({produceFilter}) {

  const mapProduceItems = produceFilter.map((item) => {
    return <FarmItems
        item={item}
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        type={item.type}
    
    />
})

  return (
    <div>
      {mapProduceItems}
    </div>
  )
}

export default Garden;
