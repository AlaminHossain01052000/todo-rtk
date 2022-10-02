import React from 'react';
import { useSelector } from 'react-redux';
import { useGetTodoQuery } from '../features/todo/api/apiSlice';
import Todo from './Todo';

const Todolists = () => {
    const {data:todos,isLoading,isError}=useGetTodoQuery();
    const {filterReducer}=useSelector(state=>state);
    let content=null;
    if(isLoading)content=<div>Loading...</div>
    if(!isLoading&&isError)content=<div>An error was occured</div>
    if(!isLoading&&!isError&&todos?.length===0)content=<div>No data Found</div>
    if(!isLoading&&!isError&&todos?.length>0){
        let newTodos=todos;
        if(filterReducer?.tag==='incomplete'){
            newTodos=todos?.filter(todo=>!todo.completed);
        }
        else if(filterReducer?.tag==='complete'){
            newTodos=todos?.filter(todo=>todo.completed);
        }
        if(filterReducer?.colors.length>=1){
            newTodos=todos?.filter(todo=>filterReducer.colors.includes(todo.color));
        }
        
        content=newTodos.map(todo=><Todo todo={todo} key={todo.id}/>)
    }
    
    return (
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >

           {content}
        </div>

    );
};

export default Todolists;