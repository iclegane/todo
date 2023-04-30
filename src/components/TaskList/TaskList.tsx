import { FlexColumn } from '../../css/css';
import Task from '../Task/Task';
import { ITaskListProps } from './types';
 
const TaskList: React.FC<ITaskListProps> = ({ items = [], onChangeTask, onDeleteTask }) => {
    if (!items.length) {
        return null;
    }

    return (
        <FlexColumn>
            {items.map((task, index) => 
                <Task 
                    key={ task.name }
                    name={ task.name }
                    status={ task.status }
                    onChangeTask={(newValue) => onChangeTask(index, newValue)}
                    onDeleteTask={() => onDeleteTask(index)}
                /> 
            )}
        </FlexColumn>
    )
}

export default TaskList;
