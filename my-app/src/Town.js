import React, {useState} from "react";
import FarmItems from "./FarmItems"

function Town({farmItems, setMyFarmItems}) {

    const [category, setCategory] = useState()

    function handleChange(e) {
        setCategory(e.target.value)
    }
   
    function getFilteredCategory() {
        if (!category) {
          return farmItems;
        }
        return farmItems.filter((item) => item.type === category);
      }
      



const mapFarmItems = getFilteredCategory().map((item) => {
    return <FarmItems
        item={item}
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        type={item.type}
        setMyFarmItems={setMyFarmItems}
    />
})

return (
    <div>
        <h1>General Store</h1>
    <label>
        <strong>Filter: </strong>
        <select onChange={handleChange}>
         <option value="">All</option>
          <option value="produce">Produce</option>
          <option value="livestock">Livestock</option>
        </select>
      </label>
        {mapFarmItems}
    </div>
)
}

export default Town;