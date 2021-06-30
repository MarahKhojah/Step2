import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import  {useSelector} from 'react-redux'; // import useSelector tool to grab data 
import {selectTodoList} from './features/todoSlice';

function App() {
  const todoList= useSelector(selectTodoList)
  return (
    <div className="app">
      <div className='container'>
      <h1>Track Your task..</h1>
      <Input></Input>

        <div className='list_container'>
          {  
          todoList.map(item=>(
            <TodoItem name={item.item} done={item.done} id={item.id}></TodoItem>
          ))
        }
        </div>

      </div>
    </div>
  );
}

export default App;
