import { useState } from 'react'
import './todo.css'

export default function Todo (props) {

    const [isTaskCopleted , setIsTaskCompleted] = useState(false)
    // this value will decode that task is comleted or not 

    const scratchedText = {
        color : 'red',
    }
    // will apply this css to text when isTaskCopleted = true
    return (
        <div className="wrapper">
            <p style={ isTaskCopleted ? scratchedText  : {}}>{props.task}</p>
            <button 
            onClick={
                () => props.deleteFunction (props.task)
                // here we passing the task in function to delete it
                //  here we can also pass index of task to delete fnction to delete the task
                }>
            Delete</button>

            <button
                onClick={()=>setIsTaskCompleted(true)}
            >Complate</button>
        </div>
    )
}