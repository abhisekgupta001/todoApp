import React, { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import {removeTodo, updateTodo} from "../features/todo/todoSlice";


const Todos = () => {
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editingTodoText, setEditingTodoText] = useState('');
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const handleEdit = (todo) =>{
        setEditingTodoId(todo.id);
        setEditingTodoText(todo.text)
    }

    const handleUpdate = () =>{
        dispatch(updateTodo({
            id: editingTodoId,
            text:editingTodoText
        }));
        setEditingTodoId(null);
        setEditingTodoText('');
    }

    const handleRemove = (id) =>{
         dispatch(removeTodo(id));
    }
  return (
    <>
    <ul className='list-none w-1/2 m-auto'>
        {
            todos.map((todo)=>(
                <li key={todo.id} className='mt-4 flex bg-zinc-800 px-4 py-2 rounded'>
                    {
                        editingTodoId === todo.id ?
                        (
                            <div className='w-full flex justify-between items-center gap-3'>
                                <input type="text" value={editingTodoText} onChange={e => setEditingTodoText(e.target.value)} className='flex-1 bg-gray-500 text-white p-1 rounded-sm'/>
                                <button onClick={handleUpdate} className='text-white'>Update</button>
                            </div>
                        ) : (
                            <div className='w-full flex justify-between items-center gap-3'>
                                <span className='flex-1 text-white text-left'>{todo.text}</span>
                                <button onClick={()=>handleEdit(todo)} className='text-yellow-400'>Edit</button>
                                <button onClick={()=>handleRemove(todo.id)} className='text-red-400'>Remove</button>
                            </div>
                        )
                    }
                </li>
            ))
        }
    </ul>
    </>
  )
}

export default Todos