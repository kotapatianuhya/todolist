import Task from "./Task"

 
const Tasks = ({ tasks, onDelete, onComplete }) => {
return (
    <>
      {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete}/>
      ))} 
    </>
  )
}

export default Tasks
