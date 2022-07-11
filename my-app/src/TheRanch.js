import { React, useState, useEffect } from 'react'

function TheRanch ( {bank, setBank}) {
    return (
        <div>
            <h1>Bank Amount: </h1>
            <p>${bank}</p>
        </div>
   
    )

}

export default TheRanch;
