import React, { useState } from 'react';
import TaskList from '../TaskList/TaskList';
import { tasks as TaskItems } from '../../utils/tasks';
import { AppContainer } from '../../css/css';

const App: React.FC = () => {
  const [tasks] = useState(TaskItems);

  return (
    <AppContainer className="App">
      <TaskList items={tasks} />
    </AppContainer>
  );
}

export default App;
