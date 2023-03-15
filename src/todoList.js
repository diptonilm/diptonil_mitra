import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [count, setCount] = useState(0)

  const countTask = ()=>{
    setCount(count+1)
  }

  const decreaseTask = (index)=>{
    if(count>0){
        const newTasks = [...tasks];
        newTasks[index].completed ? setCount(count):setCount(count-1);
    }
  }

  const decreaseTask2 = (index)=>{
    if(count>0){
        const newTasks = [...tasks];
        newTasks[index].completed ? setCount(count+1):setCount(count-1)
    }
    else{
        const newCount = count>0 ? setCount(count-1):0;
        setCount(newCount);
    }
  }

  const handleBoth1 = (index,task)=>{
    decreaseTask2(index)
    handleComplete(index)
  }

  const handleBoth2 = (index)=>{
    decreaseTask();
    handleDelete(index)
  }

  const handleSubmit = e => {
    e.preventDefault();
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <h1 style={{paddingTop:10, position: 'sticky', top:0, backgroundColor: 'rgb(59, 53, 53)', width:'100%', textAlign: 'center'}}>Pending Tasks ({count})</h1>
        {tasks.map((task, index) => (
          <li className='listItem'
            key={index}
            style={{ textDecoration: task.completed ? 'line-through' : 'none', listStyleType :'none'}}
          >
            <div style={{fontSize:20, overflowWrap: 'break-word', inlineSize: 176}}>{task.text}</div>
            <div>
                <button onClick={() => handleBoth1(index,task)}  className='btnDiv'>Complete</button>
            <button onClick={() => handleBoth2(index)} className='btnDiv'>Delete</button>
            </div>
          </li>
        ))}
     <form onSubmit={handleSubmit} style={{position: 'sticky', bottom:0, backgroundColor: 'rgb(59, 53, 53)', width:'100%', textAlign: 'center'}}>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button style={{margin : 10, padding:10, backgroundColor: 'peru', border:'none', borderRadius: 5, color: 'white'}} type="submit" onClick={countTask}>Submit</button>
      </form>
    </>
  );
}

export default TodoList;