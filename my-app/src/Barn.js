import React from "react";
import FarmItems from "./FarmItems";

function Barn({livestockFilter}) {

  const mapLivestockItems = livestockFilter.map((item) => {
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
            {mapLivestockItems}
        </div>
    )
}

export default Barn;