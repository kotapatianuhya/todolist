
import { useState } from "react"
const Addtask = ({ onAdd }) => {
    const [text,setText] = useState('');
const onSubmit = (e) => {
       e.preventDefault()
       if(!text){
           alert("add a task")
           return
       }
       onAdd({text})
       setText('')
}
  return (
    <form className="input" onSubmit={onSubmit}>
      <div >
        <label className="label1">TODO:</label>
        <input type='text' placeholder='enter the task...'value={text} 
        onChange = {(e) => setText(e.target.value)} />
         <input type='submit' value='submit' className="button1"/>
      </div>
     
    </form>
  )
}

export default Addtask
