import {useState,useRef} from 'react';
import axios from 'axios';
const Get=()=>{
      const name=useRef("");
      const password=useRef("");
      const[res,setRes]=useState("");
      let myfunc=()=>{axios.post('https://reqres.in/api/users',{"name":name.current.value,"password":password.current.value})
                      .then((posRes)=>{const {data}=posRes;
                             setRes=(data)},
                             (errRes)=>{console.log(errRes)}
                                 )
                      };
      return(<>
        <div>
            <label>Name</label>
            <input type={"text"} ref={name}></input><br></br><br></br>
        </div>
        <div>
               <label>Password</label>
               <input type={"password"} ref={password}></input><br></br><br></br>
        </div>
        <div>
            <button onClick={myfunc} >Post</button>
         </div>
         {Object.keys(res).length==0?<div></div>:<h1>{JSON.stringify(res)}</h1>}
      </>)



}
export default Get;