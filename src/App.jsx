import { useState } from "react"
function App() {
  const [data,setData]=useState(0);
  return (
    
    <>
    <h1>Count</h1>
    <h1>{data}</h1>
    <button onClick={()=>{setData(data+10)}}>Increase count</button>
    
    </>
  )
}

export default App