import { FlexColumn } from '../../css/css';
import Task from '../Task/Task';
import { ITaskListProps } from './types';
 
const TaskList: React.FC<ITaskListProps> = ({ items = [] }) => {
    if (!items.length) {
        return null;
    }

    return (
        <FlexColumn>
            { items.map((task) => <Task key={ task.name } {...task} /> )}
        </FlexColumn>
    )
}

export default TaskList;
