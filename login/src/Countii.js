import React ,{useState}from 'react';
const Countii=()=>{
    const [num,setNum]=useState(0);
    const handleStart=()=>{
         setNum(num+1)
    }
    const handleStop=()=>{
        
    }
    return(<>
             {num}
             <button onClick={handleStart}>Start</button>
             <button onClick={handleStop}>Stop</button>
           </>)
}
export default Countii;