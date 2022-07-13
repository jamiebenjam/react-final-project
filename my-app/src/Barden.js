import { useState, useRef, useEffect } from 'react';

function Barden({id, name, image, price, type, setMyFarmItems, item, setFarmItems, adult, count}) {


    function handleClick() {

        setFarmItems(item)
        // funciton from App two functions passed as one prop with two names and where it was derived (farm/garden or town) will execute the diff functions +$ or -$
        // generate a dynamic state const const state = `${item.name}Life const setState = set`${item.name}Life
        // console.log(item)
    }



    return (
        <div >
            
            <button onClick={handleClick}> Harvest
            <p>{name}</p>
            <img style={{height : 150, width: 150}} src={image} alt="it worked"></img>
            <p>Growth period: {item.mature} days</p>
            <p>{type}</p>
            </button>

        </div>
    )
}

export default Barden;