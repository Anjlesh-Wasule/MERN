import {useEffect} from 'react'

const WindowSize = () => {

  const onResize = (event) => {
    console.log(event);
  }

  useEffect(() => {
    window.addEventListener("resize", onResize);
  
    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, [])
  

  return (
    <div>
      <h1>Window Size</h1>
    </div>
  )
}

export default WindowSize