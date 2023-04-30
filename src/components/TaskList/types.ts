import { ITask } from "../../types/task";

export interface ITaskListProps {
    items: ITask[];
    onChangeTask: (index: number, status: boolean) => void;
    onDeleteTask: (index: number) => void;
}
