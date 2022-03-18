import { useState } from "react"
import "./App.css"
import Addtask from "./component/Addtask";
import Header from "./component/Header";
import Tasks from "./component/Tasks";

const App = (props) =>{
  const [completedtask,setcompletedTask] = useState([])
  const [tasks , setTasks] = useState([
    {
     id:1,
     text : "Reading book",
    },
    {
        id:2,
        text : "Drawing",
    },
    {
        id:3,
        text:"playing",
    }
])
//add task
const addTask = (task) => {
     const id = Math.floor(Math.random()*10000)+1
     const newTask = { id, ...task }
     setTasks([...tasks,newTask])
}
//complete task
const completetask = (id) => {
    const element = tasks.findIndex((elem) => elem.id === id);
    setcompletedTask([...completedtask, tasks[element]])
    setTasks(tasks.filter((task) => task.id !== id))
}
// delete task
const deletetask = (id) => {
   setTasks(tasks.filter((task) => task.id !== id))
}
const removetask = (id) => {
  setcompletedTask(completedtask.filter((task) => task.id !== id))
}
   return(
     <div>
         <Header/>
         <Addtask onAdd={addTask}/>
         <div className="card1">
          <h2>Tasks To Do</h2>
         {tasks.length > 0 ? (<Tasks tasks={tasks} 
         onDelete={deletetask} onComplete={completetask}/>) : ("no tasks todo")
         }
         </div>
         <div  className="card">
           <h2>Completed Tasks</h2>
           {completedtask.map((task) => <h4 key={task.id}>{task.text}
           <button onClick={() => removetask(task.id)}>remove</button></h4>)}
          </div>
      </div>
   )
}

export default App;