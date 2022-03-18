const Task = ({task, onDelete , onComplete}) => {
  return (
    <div className="container">
         <h3>{task.text}
         <button onClick={() => onComplete(task.id)}>complete</button>
         <button onClick={() => 
            onDelete(task.id)}>delete</button>
         </h3>
    </div>
  )
}

export default Task
