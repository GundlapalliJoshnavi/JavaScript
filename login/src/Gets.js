import {useState,useEffect} from 'react';
import axios from 'axios';
const Gets=()=>{
const[arr,setArr]=useState([]);
useEffect(()=>{axios.get(`https://reqres.in/api/users?page=2`)
                    .then((posRes)=>{const {data}=posRes;
                                           setArr(data);},
                          (errRes)=>{console.log(errRes)})},[ ]);
    return(<>
        {arr.length==0?(<div className="fa fa-spinner fa-spin" 
                             style={{fontSize:60}}></div>):(<table border={1} align={"center"} cellPadding={10} cellSpacing={10}>
                                <tr><th>name</th>
                                <th>city</th>
                                <th>country</th></tr>
                             {arr.map((element,index)=>{return (<tr key={index}>
                     <td>{element.name}</td>
                     <td>{element.city}</td>
                     <td>{element.country}</td>
                     </tr>)})}</table>)}
    </>)                                                                                                                                  
}
export default Gets;