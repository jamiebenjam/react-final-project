import React, {useState} from "react"

function AudioPlayer({music, user}) {
    const [showInstructions, setShowInstructions] = useState(false)


    function handleClick() {
        setShowInstructions((instructions) => !instructions)
    }

    const copy = <p className="copy">{`Hello ${user}! You've inherited the legendary Codee Ranch from your Grandpa Codee! YEEHAW!!! Unfortunately, Codee Ranch isn't what it used to be. Put more clearly, Codee Ranch is pretty much in shambles at this point. BUT! Now, is YOUR chance! If you are willing to make it your life's mission to bring glory back to the Codee family name, only then you deserve to bear the name Codee yourself. Your first problem is that not only did you inherit the great Codee Ranch, you also inheritted the great Codee Debt. You now owe the bank $30,000 (BANK DEBT). Your second problem is that the entirety of your material possessions on your 1st day here is only $10 (BANK ACCOUNT). Your third problem is that in 150 days the bank has plans to seize Codee Ranch from you if you don't pay the debt. You should probably learn to buy (MARKET) and sell produce (GARDEN) and/or livestock (BARN) that can be grown on the Ranch and then once they have matured decide if it makes sense to harvest your produce and/or livestock or wait till they have a better return on the investment (ROI). WAIT! Before you begin, choose what speed you would like to live at. Once you begin, you can monitor the day count. Remember, you have 150 days to pay back the bank before Codee Ranch is gone forever or brought back to glory. P.S. Some rumors have been going around town that Grandpa Codee's ghost can be heard playing his favorite song, "Codee Ranch Theme". Click play to channel his spirit!`}</p>
   
   return(
    <div>
        <h1 className="codeeRanch">Codee Ranch</h1>
        {showInstructions ? copy : null}
        <button onClick={handleClick}>#learnToCodee (instructions)</button>
        <br></br>
        <hr></hr>
        <audio src={music} controls loop/>
    </div>
   )
}

export default AudioPlayer