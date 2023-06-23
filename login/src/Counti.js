import { useEffect, useState } from "react";
const Counti=()=>{
const[count,setCount]=useState(0);
//const Inc=setCount(1);
//useEffect(()=>setCount(count+1))
//useEffect(()=>setCount(count-1))
//const handleStart=()=>{
    
//}
const handleStop=()=>{
   
}
  return(<>
    <div style={{textAlign:"center"}}>
        <h1>Count Number</h1><br></br>
        {count}<br></br><br></br>
       {/* <button onClick={Inc}>add</button>*/}
        <button onClick={()=>{setCount(count+1)}}>Increment</button>&nbsp;&nbsp;
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>&nbsp;&nbsp;
        {/*<button onClick={()=>{setCount(0)}}>Reset</button><br></br><br></br>
        <button onClick={handleStart}>Start</button>*/}
         <button onClick={handleStop}>Stop</button>
        </div>
    </>)
}
export default Counti;