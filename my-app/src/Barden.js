import { useState, useRef, useEffect } from 'react';

function Barden({id, name, image, price, type, setMyFarmItems, item, setFarmItems}) {
    const [life, setLife] = useState(0)

    function handleClick() {

        setFarmItems(item)
        // funciton from App two functions passed as one prop with two names and where it was derived (farm/garden or town) will execute the diff functions +$ or -$
        // generate a dynamic state const const state = `${item.name}Life const setState = set`${item.name}Life
        // console.log(item)
    }

    function lifeCycle( {life, setLife }) {
    
      
        }
        
        function useInterval(callback, delay) {
          const savedCallback = useRef();
        
          // Remember the latest function.
          useEffect(() => {
            savedCallback.current = callback;
          }, [callback]);
        
          // Set up the interval.
          useEffect(() => {
            function tick() {
              savedCallback.current();
            }
            if (delay !== null) {
              let id = setInterval(tick, delay);
              return () => clearInterval(id);
            }
          }, [delay]);

            console.log(life)
            useInterval(() => {
                // Your custom logic here
                setLife(life + 1);
              }, 10000);
            
              return <h1>Days left till harvest: {life}</h1>;
        }


    return (
        <div >
            
            <button onClick={handleClick}> Harvest
            <p>{name}</p>
            <img style={{height : 150, width: 150}} src={image} alt="it worked"></img>
            <p>{price}</p>
            <p>{type}</p>
            <p>{lifeCycle}</p>
            </button>

        </div>
    )
}

export default Barden;
