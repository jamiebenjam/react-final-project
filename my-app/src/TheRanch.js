import { React, useState, useEffect } from 'react'
import ranch from './theranch.png'

function TheRanch ( {bank, setBank, setSpeed, speed, user}) {

    function handleSpeedChange(e) {
        setSpeed(e.target.value)
        console.log(e.target.value)
    }

    const goal = 30010
    const remainder = (goal - bank).toFixed(2)


    return (
        <div id="the-ranch">
            <img src={ranch}></img>
            <h1>Bank Debt: {remainder > 0 ? new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(remainder) : alert(`${user}! You saved Codee Ranch and restored the family name!!!!! You green thumb, you!`)}</h1>
            <h1>Bank Account: {new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(bank)}</h1>
            <label htmlFor="type">Speed: </label>
            <select onChange={handleSpeedChange} id="type" name="type" >
                <option value={speed}>Select One</option>
                <option value="10000">Slow</option>
                <option value="5000">Medium</option>
                <option value="1000">Fast</option>
            </select>
            <p className='copy'>{` Hello ${user}! You've inherited the legendary Codee Ranch from your Grandpa Codee! YEEHAW!!! Unfortunately, Codee Ranch isn't what it used to be. Put more clearly, Codee Ranch is pretty much in shambles at this point. BUT! Now, is YOUR chance! If you are willing to make it your life's mission to bring glory back to the Codee family name, only then you deserve to bear the name Codee yourself.`}<p></p>{` Your first problem is that not only did you inherit the great Codee Ranch, you also inheritted the great Codee Debt. You now owe the bank $30,000 (BANK DEBT).`}<p></p>{` Your second problem is that the entirety of your material possessions on your 1st day here is only $10 (BANK ACCOUNT). `}<p></p>{`Your third problem is that in 150 days the bank has plans to seize Codee Ranch from you if you don't pay the debt. You should probably learn to buy (MARKET) and sell produce (GARDEN) and/or livestock (BARN) that can be grown on the Ranch and then once they have matured decide if it makes sense to havest your produce and/or livestock or wait till they have a better return on the investment (ROI).`}<p></p>{` WAIT! Before you begin, choose what speed you would like to live at. Once you begin, you can monitor the day count. Remember, you have 150 days to pay back the bank before Codee Ranch is gone forever or brought back to glory.`}<p>{`P.S. Some rumors have been going around town that Grandpa Codee's ghost can be heard playing his favorite song, "Codee Ranch Theme". Click play to channel his spirit!`}</p></p>
        </div>
   
    )

}

export default TheRanch;
