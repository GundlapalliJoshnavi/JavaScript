import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Get from './Get';
import Todo from './Todo';
import TodoList from './TodoList';
import FormInput from './FormInput';
import Counti from './Counti';
import Countii from './Countii';

import reportWebVitals from './reportWebVitals';
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Counti/>
  </React.StrictMode>
);

//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
