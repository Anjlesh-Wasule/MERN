import {useState, useEffect} from 'react'
import WindowSize from './WindowSize'

const Timer = () => {
  const [time, setTime] = useState(0);
  const [showWindow, setShowWindow] = useState(true);


  useEffect(() => {
    console.log("Effect Called")
    // setInterval(() => {
    //   tick();
    // }, 1000);
    
    const tick = () => {
      setTime(prevTime => prevTime + 1);
    }

    let intervalId = setInterval(tick, 1000);

    // this function is called when the component is unmounted
    return () => {
      // clean up logic should come here
      console.log("Clear Called")
      clearInterval(intervalId);
    }
  }, [])
  

  return (
    <>
    <div>{time}</div>
    {showWindow ? <WindowSize/> : null}
    <button onClick={()=>setShowWindow(false)}>Stop Resize</button>
    
    </>
  )
}

export default Timer