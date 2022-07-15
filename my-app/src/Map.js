import React from "react";
import { NavLink} from 'react-router-dom';
import styled from "styled-components/"
import './Map.css';
import { useState } from 'react';

function Map({bank, user, finisher}) {
    const goal = 30010
    const remainder = (goal - bank).toFixed(2)
    const [trap, setTrap] = useState(false)


    function trapHouse() {
        if (trap === false) {
            return alert(`${user}! You saved Codee Ranch and restored the family name!!!!! You green thumb, you!`),
            setTrap(true)
        }
    }
    
    return (
        <NavDetail>
        <div >
            {/* <h1> .</h1> */}
            <br></br>
            <NavLink className="navDiv" to="/">Codee Ranch</NavLink> | <NavLink className="navDiv" to="/town">Market</NavLink> | <NavLink className="navDiv" to="/garden">Garden</NavLink> | <NavLink className="navDiv" to="/barn">Barn</NavLink>
            <h2 className="navDiv">Remaining Bank Debt: {remainder > 0 ? new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(remainder) : (trapHouse(), finisher())}</h2>
            <h2 className="navDiv">Bank Account: {new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(bank)}</h2>
            <NavLink className="navDiv" to="/LeaderBoard"> Leader Board</NavLink>
        </div>
        </NavDetail>
    )
}

export default Map;

const NavDetail = styled.div`
    // h1 {
    //     background-color: red;
    //     color: white;
    //     font: Coventry
    // }
    // @font-face {
    //     font-family: 'Coventry';
    //     src: url(Coventry.ttf);
    //     font-style: normal;
    //     font-weight: normal;
    // }
   

`