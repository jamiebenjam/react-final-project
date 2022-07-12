import React, {useState} from "react";
import FarmItems from "./FarmItems"

function Town({farmItems, setMyFarmItems, setFarmItems}) {

    const [category, setCategory] = useState()
    const [formState, setFormState] = useState({})
    

    const {name, image, price, type} = formState

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            name: name,
            image: image,
            price: price,
            type: type,
            roi: (price*.25)
        }
        // setFarmItems((prevState) => ([...prevState, newFormObj]))

        fetch("http://localhost:8000/farm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => r.json())
        .then((data) => setFarmItems((prevState) => ([...prevState, data])))
    }



    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

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

        <form onSubmit={handleSubmit} className="form">

            <h3>Don't see the animal you're looking for?</h3>
            <label htmlFor="name">Name</label>
            <input onChange={handleFormChange} type="text" id="name" name="name" value={name}></input>
            
            <label htmlFor="image">Image</label>
            <input onChange={handleFormChange} type="text" id="image" name="image" value={image}></input>

            <label htmlFor="price">Price</label>
            <input onChange={handleFormChange} type="text" id="price" name="price" value={price}></input>

            <label htmlFor="type">Type</label>
            <select onChange={handleFormChange} id="type" name="type" value={type}>
                <option>Select One</option>
                <option value="produce">Produce</option>
                <option value="livestock">Livestock</option>
            </select>

            {/* <label htmlFor="roi">Roi</label>
            <input type="roi" id="roi" name="roi" value=""></input> */}

            <button type="submit">Submit</button>

        </form>
    </div>
)
}

export default Town;