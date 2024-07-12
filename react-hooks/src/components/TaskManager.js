import React, { useState, useContext, useMemo, useRef } from 'react';
import { TaskContext } from '../context/TaskContext';

import "../App.css"

const TaskManager = () => {
  const { tasks, addTask, removeTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState('');
  const inputRef = useRef(null);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
      inputRef.current.focus();
    }
  };

  const memoizedTasks = useMemo(() => {
    return tasks.map((task, index) => (
      <li key={index}>
        {task}
        <button className='btn' onClick={() => removeTask(index)}>Remove</button>
      </li>
    ));
  }, [tasks]);

  return (
    <div className='taskMngr'>
      <h1>Task Manager</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="New Task" 
        ref={inputRef}
      />
      <button className='addBtn' onClick={handleAddTask}>Add Task</button>
      <ul>
        {memoizedTasks}
      </ul>
    </div>
  );
};

export default TaskManager;
