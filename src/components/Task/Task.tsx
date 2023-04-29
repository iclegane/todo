import React from 'react'
import { ITask } from '../../types/task';
import { Flex } from '../../css/css';
import Checkbox from '../ui/Checkbox/Checkbox';
import { ITaskProps } from './types';

const Task: React.FC<ITaskProps> = ({ name, status }: ITask) => {
  return (
    <Flex>
        <div>
          {name}
        </div>
        <div>
          <Checkbox checked={status} />
        </div>
    </Flex>
  )
}

export default Task;
