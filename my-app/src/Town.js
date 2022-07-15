import React, {useState} from "react";
import FarmItems from "./FarmItems";
// import { Card } from "semantic-ui-react";
import "./App.css"

function Town({farmItems, setMyFarmItems, setFarmItems, poster, bank, setBank, count, speed}) {
    const [category, setCategory] = useState()
    const [formState, setFormState] = useState({})

    if (!speed) {
        alert("Please return to Codee Ranch and select a speed")
    } else {

    
    let random = (Math.random() + 1).toFixed(2)
    let matRandom = Math.floor(Math.random()*20)

     
    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            name: name,
            image: image,
            price: (price*1),
            type: type,
            roi: random, 
            mature: matRandom
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
        <img className="marketpic" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/234f95e2-eb25-4123-8220-0fc869e8ed77/dbuo3xg-72de597e-5828-4352-90d1-a47c4937f5bf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzNGY5NWUyLWViMjUtNDEyMy04MjIwLTBmYzg2OWU4ZWQ3N1wvZGJ1bzN4Zy03MmRlNTk3ZS01ODI4LTQzNTItOTBkMS1hNDdjNDkzN2Y1YmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bYbhs71YUrDkUWsgUy_KliJ6FUSHu6BfOhLCWM8X2sU"></img>
        <h1>General Store</h1>
    <label>
        <strong>What are you looking for today? </strong>
        <select onChange={handleChange}>
         <option value="">All</option>
          <option value="produce">Produce</option>
          <option value="livestock">Livestock</option>
        </select>
      </label>
            <div id="container">
                <ul className="farmList"> {mapFarmItems}</ul>
            </div>

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
}}

export default Town;