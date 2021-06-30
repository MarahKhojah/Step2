import React from 'react'
import './TodoItem.css';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';



const TodoItem = ({name,done,id}) => {
    const dispatch = useDispatch()
    const handleCheck=()=>{  //function to take all checking or unchecking
        dispatch(setCheck(id));

    }
    return (
        // add specific CalssName (line8) based on whether it is done or not (if it is done then modify todoItem  )
        <div className='item'>
         <Checkbox
        checked={done}
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
            <p className={done && 'item--done' }>{name}</p>  
        </div>
    )
}

export default TodoItem
