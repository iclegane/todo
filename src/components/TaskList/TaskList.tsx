import { FlexColumn } from '../../css/css';
import { ITaskListProps } from './types';
 
const TaskList: React.FC<ITaskListProps> = ({ items = [] }) => {
    if (!items.length) {
        return null;
    }

    return (
        <FlexColumn>
            { items.map((task) => <div key={task.name}>{ task.name }</div> )}
        </FlexColumn>
    )
}

export default TaskList;
