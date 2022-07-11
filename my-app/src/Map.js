import React from "react";
import { NavLink} from 'react-router-dom';

function Map() {
    return (
        <div>
            <h1>Farmville</h1>
            <NavLink to="/town">Town</NavLink>
            <NavLink to="/bank">Bank</NavLink>
        </div>
    )
}

export default Map;