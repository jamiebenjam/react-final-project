

function AudioPlayer({music}) {
   
   return(
    <div>
        <h1 className="codeeRanch">Codee Ranch</h1>
        <audio src={music} controls loop/>
    </div>
   )
}

export default AudioPlayer