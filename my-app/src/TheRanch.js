import { React, useState, useEffect } from 'react'
import ranch from './theranch.png'

function TheRanch ( {bank, setBank, setSpeed, speed}) {

    function handleSpeedChange(e) {
        setSpeed(e.target.value)
        console.log(e.target.value)
    }

    const goal = 30010
    const remainder = (goal - bank).toFixed(2)


    return (
        <div id="the-ranch">
            <img src={ranch}></img>
            <h1>Debt to Bank: {remainder > 0 ? new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(remainder) : alert(`You saved Codee Ranch and restored the family name!!!!! You green thumb, you!`)}</h1>
            <h1>Bank Account: {new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(bank)}</h1>
            <p>You've inherited a ranch from your Grandpa Codee! Unfortunately, it's in shambles and it's YOUR job to bring glory back to the family name. You have $10 to start, the entirety of your material possessions, and 150 days left in the growing season to get out of debt before the bank seizes your ranch. Choose what speed you play in.</p>
            <label htmlFor="type">Speed: </label>
            <select onChange={handleSpeedChange} id="type" name="type" >
                <option value={speed}>Select One</option>
                <option value="10000">Slow</option>
                <option value="5000">Medium</option>
                <option value="1000">Fast</option>
            </select>
        </div>
   
    )

}

export default TheRanch;
