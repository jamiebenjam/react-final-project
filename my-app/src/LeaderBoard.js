import {React, useState } from 'react';

function LeaderBoard({winners}) {
    
    const [winnerCount, setWinnerCount] = useState(0)

    // function renderLeader
    console.log(winners.name)

    return (
        <>
        <div>
           {`1. Name: ${winners.name} ...............................Game Speed: ${winners.GameSpeed}ms........................Codee Endowment: $${winners.highScore} `}
        </div>
        </>
    )
}

export default LeaderBoard;


// past these in App
