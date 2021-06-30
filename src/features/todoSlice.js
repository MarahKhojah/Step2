import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList:[]

}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo:(state,action)=>{ //state: is the currently state of addTodo , action is the function is actually exected and will have payload which is carried inside addTodo. 
            state.todoList.push(action.payload) // then it will go to state of todoList and push action.payload
        },

        setCheck:(state,action)=>{
            state.todoList.map(item=>{
                if(action.payload===item.id){
                    if (item.done===true){
                        item.done=false
                    }else{
                    item.done=true
                }
                }
            })

        }

    
    }
});

export const {
    saveTodo,setCheck
} = todoSlice.actions
export const selectTodoList =state=> state.todos.todoList //here it will reach all the states (each todos (slice) has a specific state ) and return back 
export default todoSlice.reducer