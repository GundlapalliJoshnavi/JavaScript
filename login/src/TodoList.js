
import React, { useState } from 'react';
const TodoList=()=>{
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      setTodos([...todos, inputValue]);
      setInputValue('');
    };
  
    const handleTodoDelete = (index) => {
      setTodos(todos.filter((_, i) => i !== index));
    };
  
    return (
      <div>
        <h1>Todo List</h1>
        <form onSubmit={handleFormSubmit}>
          <input  type="text" value={inputValue} onChange={handleInputChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button style={{border:"none" ,color:"white",backgroundColor:"green",padding:"5px"}} type="submit">Add Todo</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li style={{listStyle:"none"}} key={index}>
              {todo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button style={{border:"none" ,color:"white",backgroundColor:"red",padding:"5px", margin: "5px"}} onClick={() => handleTodoDelete(index)}>Delete</button><br></br>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoList;