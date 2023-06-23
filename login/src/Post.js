import {useRef,useState} from 'react';
import axios from 'axios';
const Post=()=>{
    const box1=useRef(" ");
    const box2=useRef(" ");
    const[res,setRes]=useState({});
    const my_func=()=>{
        axios.post("https://reqres.in/api/login",{"email":box1.current.value,"password":box2.current.value})
             .then((posRes)=>{
                const{data}=posRes;
             },(errRes)=>{console.log(errRes)})}

             return(<>
                 <input type={"text"} ref={box1}></input><br></br> 
                 <input type={"text"} ref={box2}></input><br></br> 
                 <button onClick={my_func}>send</button>
{
    Object.keys(res).length==0?(<div></div>):(<h1>{JSON.stringify(res)}</h1>)}
            </>)
    }

export default Post;