import React from "react";
import Barden from "./Barden";

function Barn({livestockFilter, setFarmItems}) {

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
    
    />
})
    return (
        <div>
            {mapLivestockItems}
        </div>
    )
}

export default Barn;