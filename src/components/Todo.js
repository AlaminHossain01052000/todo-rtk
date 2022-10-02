import React, { useEffect, useState } from 'react';
import cancel from '../assets/images/cancel.png'
import { useDeleteTodoMutation, useEditTextOfTodoMutation, useUpdateCompletionStatusOfTodoMutation } from '../features/todo/api/apiSlice';
const Todo = ({todo}) => {
    const [updateCompletionStatusOfTodo]=useUpdateCompletionStatusOfTodoMutation();
    const [updateColorOfTodo]=useUpdateCompletionStatusOfTodoMutation();
    const [deleteTodo]=useDeleteTodoMutation();
    const [editTextOfTodo,{isSuccess}]=useEditTextOfTodoMutation();

    const [editable,setEditable]=useState(false);
    const {id,completed,text,color}=todo||{};
    const [editedText,setEditedText]=useState(text);
    const [newColor,setNewColor]=useState(color);
    const handleUpdatingCompletedStatus=()=>{
        updateCompletionStatusOfTodo(
            {
                ...todo,
                completed:!completed
            }
            
            );
    }
    useEffect(()=>{
        updateColorOfTodo({
            ...todo,color:newColor
        })
    },[newColor,updateColorOfTodo,todo])
    const handleDelete=()=>{
        deleteTodo(id);
    }
    const handleTextEditing=()=>{
        
        editTextOfTodo({...todo,text:editedText});

        if(isSuccess)setEditable(false);
    }
    return (
        <div>
             <div
                className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
            >
                <div
                    className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500"
                    onClick={handleUpdatingCompletedStatus}
                >
                    <input
                        type="checkbox"
                        className="opacity-0 absolute rounded-full"
                    />
                    <svg
                        className="hidden fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                </div>
                {
                    editable?
                    <div>
                        <input type="text" onChange={(e)=>setEditedText(e.target.value)} value={editedText} required/>
                        <button onClick={handleTextEditing}>Done</button>
                    </div>
                    :
                    completed?
                    <div className="select-none flex-1 line-through" onClick={()=>setEditable(true)}>
                    {text}
                    </div>:
                    <div className="select-none flex-1" onClick={()=>setEditable(true)}>
                    {text}
                    </div>


                }
                {
                   color==='green'?
                    <>
                    <div
                    className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 bg-green-500"
                    onClick={()=>setNewColor('green')}
                ></div>

                <div
                    className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500"
                    onClick={()=>setNewColor('yellow')}
                ></div>

                <div
                    className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500"
                    onClick={()=>setNewColor('red')}
                ></div>
                    </>
                    
                   :
                   color==='red'?
                   
                        <>
                        <div
                        className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500"
                        onClick={()=>setNewColor('green')}
                    ></div>
    
                    <div
                        className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500"
                        onClick={()=>setNewColor('yellow')}
                    ></div>
    
                    <div
                        className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 bg-red-500"
                        onClick={()=>setNewColor('red')}
                    ></div>
                        </>
                   
                    :
                        <>
                            <div
                    className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500"
                    onClick={()=>setNewColor('green')}
                ></div>

                <div
                    className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 bg-yellow-500"
                    onClick={()=>setNewColor('yellow')}
                ></div>

                <div
                    className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500"
                    onClick={()=>setNewColor('red')}
                ></div>
                        </>
                    
                }

                <img
                    src={cancel}
                    className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                    alt="Cancel"
                    onClick={handleDelete}
                />
            </div>

            
            
        </div>
    );
};

export default Todo;