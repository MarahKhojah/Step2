import React,{useState} from 'react' ;
import './Design.css';

import {useDispatch} from 'react-redux'
import { saveTodo } from '../features/todoSlice';

const Input = () => {
    const [input,setInput]=useState('')
    const dispatch = useDispatch()

    const addTodo=()=>{
        console.log('Adding ${input}') //adding the input 

        dispatch(saveTodo({ // we gonna declear three objects
            item:input,
            done:false, //bc we haven't checked it as done 
            id : Date.now() //search about it 
        }))

    }

    return (
        <div className="input">
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}></input>
            <button onClick={addTodo}>Add task</button>
        </div>
    )
}

export default Input