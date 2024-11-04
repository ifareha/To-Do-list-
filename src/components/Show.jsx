import React, { useContext, useState } from 'react'
import {Task} from '../context/TaskContext';

const Show = () => {
    const [tasks, setTasks] = useContext(Task);

    let renderTasks  = (
        <h2 className="text-orange-500 font-bold text-xl">No pending tasks</h2>
    )
    if(tasks.length > 0) {
        renderTasks = tasks.map((tasks, index) => (
            <ul key={index} className="list-none w-[25%]  ">
            <li className="mb-5 flex justify-between w-full items-center border rounded-xl p-5">
                <div className="flex items-center">
                    <div onClick={(e)=> completeTask(e,index)}
                     className={`mr-4 rounded-full w-[30px] h-[30px] ${tasks.completed? "bg-green-500" : "border"} border-orange-600`}></div>
                    <h1 className={`${tasks.completed? "line-through" : ""} text-xl font- text-yellow-100`}>
                      {tasks.title}
                    </h1>
                </div>
                <div className="flex gap-3 text-2xl text-yellow-100">
                    <i className="ri-file-edit-line"></i>
                    <i onClick={(e)=> deleteTask(e,index)} className="ri-delete-bin-3-line"></i>
                </div>
            </li>
           
           
        </ul>
        ))

        
    }
    const completeTask = (e,index) => {
        const copyTask = [...tasks]
        copyTask[index].completed =!copyTask[index].completed
        setTasks(copyTask)
 
     }
 const deleteTask = (e, index) => {
     const copyTasks = [...tasks]
     copyTasks.splice(index, 1)
     setTasks(copyTasks)
 }
  return (
    <>
        {renderTasks}
    </>
  )
}

export default Show