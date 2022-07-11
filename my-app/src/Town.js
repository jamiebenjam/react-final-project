import React from "react";
import FarmItems from "./FarmItems"

function Town({farmItems}) {

const mapFarmItems = farmItems.map((item) => {
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
        {mapFarmItems}
    </div>
)
}

export default Town;