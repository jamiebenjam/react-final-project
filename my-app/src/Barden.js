import { useState, useRef, useEffect } from 'react';

function Barden({id, name, image, price, type, setMyFarmItems, item, setFarmItems, count}) {


    let adult = (item.birthday + item.mature)
    const profit = ((price)*((count - adult) * item.roi)).toFixed(2)
    function handleClick() {
        console.log(adult)
        console.log(profit)
        console.log(price)
        console.log((count - adult))
        console.log(item.roi)
        console.log(count)

        setFarmItems(item)
        // funciton from App two functions passed as one prop with two names and where it was derived (farm/garden or town) will execute the diff functions +$ or -$
        // generate a dynamic state const const state = `${item.name}Life const setState = set`${item.name}Life
        // console.log(item)
    }

    return (
        <li >
            
            <button onClick={handleClick}> Harvest
            <p>{name}</p>
            <img style={{height : 150, width: 150}} src={image} alt="it worked"></img>
            <p>Growth period: {item.mature} days</p>
            <p>{`Sell your ${name} for $${profit}!`}</p>
            <p>{type}</p>
            </button>

        </li>
    )
}

export default Barden;
