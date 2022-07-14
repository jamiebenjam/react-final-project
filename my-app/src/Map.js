import React from "react";
import { NavLink} from 'react-router-dom';
import styled from "styled-components/"
import './Map.css';

function Map() {
    return (
        <NavDetail>
        <div >
            {/* <h1> .</h1> */}
            <br></br>
            <NavLink className="navDiv" to="/">Codee Ranch</NavLink>
            <br></br>
            <NavLink className="navDiv" to="/town">Market</NavLink>
            <br></br>
            <NavLink className="navDiv" to="/garden">Garden</NavLink>
            <br></br>
            <NavLink className="navDiv" to="/barn">Barn</NavLink>
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