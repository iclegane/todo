import React from 'react'
import { Flex } from '../../css/css';
import Checkbox from '../ui/Checkbox/Checkbox';
import { ITaskProps } from './types';
import Button from '../ui/Button/Button';

const Task: React.FC<ITaskProps> = ({ name, status, onChangeTask, onDeleteTask }: ITaskProps) => {
  return (
    <Flex>
        <div>
          {name}
        </div>
        <div>
          <Checkbox checked={status} onChange={() => onChangeTask(!status)}/>
        </div>
        <div>
          <Button type={'button'} onClick={() => onDeleteTask()} >Удалить задачу</Button>
        </div>
    </Flex>
  )
}

export default Task;
