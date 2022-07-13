import React, {useState} from "react";
import FarmItems from "./FarmItems";
import { Card } from "semantic-ui-react";
import "./App.css"

function Town({farmItems, setMyFarmItems, setFarmItems, poster, bank, setBank, count}) {

    const [category, setCategory] = useState()
    const [formState, setFormState] = useState({})
    

    
    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            name: name,
            image: image,
            price: (price*1),
            type: type,
            roi: (price*.25)
        }
        // setFarmItems((prevState) => ([...prevState, newFormObj]))
        
        fetch("http://localhost:3000/farm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => r.json())
        .then((data) => poster((prevState) => ([...prevState, data])))
    }
    
    const {name, image, price, type} = formState


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
        count={count}
        bank={bank}
        setBank={setBank}
        item={item}
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        type={item.type}
        setMyFarmItems={setMyFarmItems}
        setFarmItems={setFarmItems}
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
        <Card.Group itemsPerRow={3}>
            <div id="container">
                {mapFarmItems}
            </div>
        </Card.Group>  

        <form onSubmit={handleSubmit} className="form">

            <h3>Don't see the animal you're looking for?</h3>
            <label htmlFor="name">Name</label>
            <input onChange={handleFormChange} type="text" id="name" name="name" ></input>
            
            <label htmlFor="image">Image</label>
            <input onChange={handleFormChange} type="text" id="image" name="image" ></input>

            <label htmlFor="price">Price</label>
            <input onChange={handleFormChange} type="number" id="price" name="price" ></input>

            <label htmlFor="type">Type</label>
            <select onChange={handleFormChange} id="type" name="type" >
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