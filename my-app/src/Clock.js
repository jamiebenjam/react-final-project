import { React, useState, useRef, useEffect } from 'react'



  function Clock( {count, setCount }) {
    
  console.log(count)
    useInterval(() => {
      // Your custom logic here
      setCount(count + 1);
    }, 10000);
  
    return <h1>Day: {count}</h1>;
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
  }
export default Clock;
