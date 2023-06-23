import {useState} from 'react';
const Todo=()=>{
    const[todo,setTodo]=useState([]);
   const [inputValue,setInputValue]=useState('');
   let handleChange=(e)=>{e.preventDefault();
                            setInputValue(e.target.value);}

   let handleSubmit=(event)=>{event.preventDefault();
                              setTodo(...todo,inputValue);}
  let handleDelete=(index)=>{
                           setTodo(todo.filter((_,i)=>i!==index)
                          )
                        };
    return(<>
    <h1>Todo List</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue} onChange={handleChange}></input> &nbsp;&nbsp;
    <button >TODO</button>
    </form>
    <ul>{todo.map((ele,index)=>{
                               <li key={index}>{ele}
                               <button onClick={()=>handleDelete(index)}>Delete</button></li>
    })}</ul>
    </>)
}
export default Todo;