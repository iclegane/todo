import React from 'react'
import { ITask } from '../../types/task';
import { Flex } from '../../css/css';

const Task = ({ name }: ITask) => {
  return (
    <Flex>
        <div>{name}</div>
        <div><input type="checkbox" /></div>
    </Flex>
  )
}

export default Task;
