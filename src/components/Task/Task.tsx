import React from 'react'
import { Flex } from '../../css/css';
import Checkbox from '../ui/Checkbox/Checkbox';
import { ITaskProps } from './types';

const Task: React.FC<ITaskProps> = ({ name, status, onChangeTask }: ITaskProps) => {
  return (
    <Flex>
        <div>
          {name}
        </div>
        <div>
          <Checkbox checked={status} onChange={() => onChangeTask(!status)}/>
        </div>
    </Flex>
  )
}

export default Task;
