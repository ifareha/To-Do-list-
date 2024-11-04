import React, { useContext, useState } from 'react'
import {Task} from '../context/TaskContext';

const Tasks = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useContext(Task);

    const handleTask = (e) => {
      e.preventDefault();
     const newTask = {
        title, 
        completed: false,
      
     };
     setTasks([...tasks, newTask])
     setTitle("")
    
    }
    
  return (
    <form onSubmit={handleTask} className="w-[27%] flex justify-between px-5 my-[2%]">
            <input onChange={(e)=> {
                setTitle(e.target.value)
                
                
            }}
            value={title}
                placeholder="write your next task..."
                className="px-5 py-3 text-yellow-100 outline-none w-[85%] rounded-xl bg-zinc-700 "
                type="text"
            />
            <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[50px] h-[50px] rounded-full bg-orange-600">
                <i className="ri-add-fill"></i>
            </button>
        </form>
  )
}

export default Tasks