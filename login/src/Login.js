import react from 'react';
import {useRef,useState} from 'react';
const Login=()=>{
    const name=useRef('');
    const pwd=useRef('');
    const [res,setRes]=useState('');
    const func=(e)=>{
                     e.preventDefault();
                    
                    if(name.current.value==="admin" && pwd.current.value==="admin@123"){setRes("login success");
                    } else{setRes("Login fail")}};
return(<>
      <div className="form-group">
             <label>Name</label>
             <input className="form-control" type={"text"} ref={name} ></input>

      </div>
      <div className="form-group">
             <label>Password</label>
             <input className="form-control" type={"password"} ref={pwd} ></input>


      </div>
      <div className="form-group" >
        <button onClick={e=>func(e)}>Login</button>
      </div>


</>)
}
export default Login;