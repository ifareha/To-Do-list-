import { createContext, useState } from "react"

export const Task = createContext(null)

const TaskContext = (props) => {
    const [task, setTask] = useState([])
  return (
    <Task.Provider value={[task, setTask]}>
        {props.children}
        console.log(props.children);
        
    </Task.Provider>
  )
}

export default TaskContext