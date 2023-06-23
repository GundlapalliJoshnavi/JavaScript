import react from 'react';
import {useRef,useState} from 'react';
const Login2=()=>{
    const name=useRef('');
    const pwd=useRef('');
    const [ress,setRess]=useState('');
    const func=(e)=>{
                     e.preventDefault();
                    
                    if(name.current.value==="admin" && pwd.current.value==="admin@123"){setRess("login success");
                    } else{setRess("Login fail")}};
return(<>
      <div className="form-group">
             <label>Email</label>
             <input className="form-control" type={"email"} ref={name} ></input>

      </div>
      <div className="form-group">
             <label>Num</label>
             <input className="form-control" type={"number"} ref={pwd} ></input>


      </div>
      <div className="form-group" >
        <button onClick={e=>func(e)}>Login</button>
      </div>


</>)
}
export default Login2;