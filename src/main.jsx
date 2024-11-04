
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TaskContext from './context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
    <TaskContext>
       <App />
    </TaskContext>
    

)
