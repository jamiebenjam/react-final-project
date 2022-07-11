import React from "react";
import { NavLink} from 'react-router-dom';

function Map() {
    return (
        <div>
            <h1>Farmville</h1>
            <NavLink to="/town">Town</NavLink>
            <br></br>
            <NavLink to="/">The Ranch</NavLink>
            <br></br>
            <NavLink to="/garden">Garden</NavLink>
            <br></br>
            <NavLink to="/barn">Barn</NavLink>
        </div>
    )
}

export default Map;