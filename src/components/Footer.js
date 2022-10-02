import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTodoQuery } from '../features/todo/api/apiSlice';
import { addColor, addTag } from '../features/todo/filters/filters';

const Footer = () => {
    const {data:todos}=useGetTodoQuery();
    const {filterReducer}=useSelector(state=>state);
    const [tag,setTag]=useState(filterReducer.tag);
    const [color,setColor]=useState("");
    const dispatch=useDispatch();
    const filteredTodos=todos?.filter(todo=>!todo.completed);
    useEffect(()=>{
       
        dispatch(addTag(tag));
    },[dispatch,tag])

    useEffect(()=>{
       
        
            if(color.length>1){
                dispatch(addColor(color));
            }
            
        
    },[dispatch,color])

    
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{filteredTodos?.length} tasks left</p>
        <ul className="flex space-x-1 items-center text-xs">
            <li className="cursor-pointer font-bold" onClick={(e)=>setTag('all')}>All</li>
            <li>|</li>
            <li className="cursor-pointer"
             onClick={(e)=>setTag('incomplete')}
            >Incomplete</li>
            <li>|</li>
            <li className="cursor-pointer"
             onClick={(e)=>setTag('complete')}
            >Complete</li>
            <li></li>
            <li></li>
            {
                filterReducer.colors.includes('green')?
                <li
                className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500`}
                onClick={()=>setColor('green')}></li>:
                <li
                className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer`}
                onClick={()=>setColor('green')}></li>
            }
            {
                filterReducer.colors.includes('red')?
                <li
                className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer bg-red-500`}
                onClick={()=>setColor('red')}></li>:
                <li
                className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer`}
                onClick={()=>setColor('red')}></li>
            }
            {
                filterReducer.colors.includes('yellow')?
                <li
                className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer bg-yellow-500`}
                onClick={()=>setColor('yellow')}></li>:
                <li
                className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer`}
                onClick={()=>setColor('yellow')}></li>
            }
            
        </ul>
    </div>
    );
};

export default Footer;