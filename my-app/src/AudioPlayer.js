

function AudioPlayer({music}) {
   
   return(
    <div>
        <h1>Codee Ranch Theme</h1>
        <audio src={music} controls loop/>
    </div>
   )
}

export default AudioPlayer