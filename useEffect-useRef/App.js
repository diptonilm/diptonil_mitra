import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './todo/todo';





function App() {

const [todoData,setTodoData] = useState([1,2,3,4,5,6,7,8,9,10])
// setting data in useState as we wnat ui to be updated with change in list of todoData

const [task , setTask] = useState('')

function handleChange (e) {
    // newly added input we receiving here ...
  const newTask = e.target.value  
  // here we storing newly added task
  setTask(newTask)
}

function handleSubmit () {
  // adding new task in our list here ...
  const exitingTodos = [...todoData,task]
  setTodoData(exitingTodos)
}

function removeTask (taskToDelete) {
  // taskToDelete  -/> this is the task we have received to delete
  // apply the logic and delte this task from list and update the list 
}



  return (
    <div className="App">
      <div>
        <input onChange={handleChange}/> 
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {
        todoData.map((ele,index) => (
          // passing custom text and delte function in components
          //  for every element in array component will get created seprately 
          <Todo 
            task = {ele}
            deleteFunction = {removeTask}
          />
        ))
      }

      
    </div>
  );
}

export default App;