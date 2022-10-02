import React, { useState } from 'react';
import notes from '../assets/images/notes.png'
import doubleTick from '../assets/images/double-tick.png'
import plus from '../assets/images/plus.png'
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodoQuery, useUpdateCompletionStatusOfTodoMutation } from '../features/todo/api/apiSlice';
const Header = () => {
    const [addTodo,{isLoading,isError}]=useAddTodoMutation();
    const [todoText,setTodoText]=useState('');
    const {data:todos}=useGetTodoQuery();
    const [updateCompletionStatusOfTodo]=useUpdateCompletionStatusOfTodoMutation();
    const [deleteTodo]=useDeleteTodoMutation();
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo({
            text:todoText,
            completed:false,
            color:'green'
        })
        if(!isError)setTodoText("");
    }
    const handleCompleteAllTasks=()=>{
        
        todos.map(todo=>{
            if(todo.completed===false){
                
                updateCompletionStatusOfTodo({...todo,completed:true})
            }
        })
    }
    const handleClearCompletedTasks=()=>{
        
        todos.map(todo=>{
            if(todo.completed===true){
                
                deleteTodo(todo.id);
            }
        })
    }

    return (    
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={handleSubmit}
            >
                <img
                    src={notes}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={todoText}
                    onChange={(e)=>setTodoText(e.target.value)}
                    required
                />
                <button
                disabled={isLoading}
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer" onClick={handleCompleteAllTasks}>
                    <img
                        className="w-4 h-4"
                        src={doubleTick}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={handleClearCompletedTasks}>Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;