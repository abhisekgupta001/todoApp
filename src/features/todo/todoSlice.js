import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos:[{id:1, text:"Hello World"}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) =>{
            const oneTodo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(oneTodo)
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo)=>(todo.id !== action.payload))
        },
        updateTodo: (state, action) =>{
            const {id, text} = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if(todoToUpdate)
            {
                todoToUpdate.text = text !== undefined ? text : todoToUpdate.text;
            }
        }
    }
})


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer