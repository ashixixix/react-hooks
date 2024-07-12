import React from 'react';
import TaskManager from './components/TaskManager'
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <TaskManager />
      </div>
    </TaskProvider>
  );
}

export default App;
