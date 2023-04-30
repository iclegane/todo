import React, { useState } from 'react';
import TaskList from '../TaskList/TaskList';
import { tasks as TaskItems } from '../../utils/tasks';
import { AppContainer } from '../../css/css';
import TaskAdd from '../TaskAdd/TaskAdd';
import { ITask } from '../../types/task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState(TaskItems);

  function addTask(task: ITask) {
    setTasks((prevState) => ([
      ...prevState,
      task
    ]))
  }

  function changeTask(index: number, status: boolean) {
    setTasks((prevState) => prevState.map((item, i) => {
        if (index === i) {
          return {...item, status}
        }

        return item;
      })
    );
  }

  function deleteTask(index: number) {
    setTasks((prevState) => prevState.filter((_, i) => index !== i));
  }

  return (
    <AppContainer className="App">
      <TaskList 
        items={tasks} 
        onChangeTask={changeTask}  
        onDeleteTask={deleteTask}
      />
      <TaskAdd onAdd={addTask}/>
    </AppContainer>
  );
}

export default App;
