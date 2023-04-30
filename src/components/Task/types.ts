import { ITask } from "../../types/task";

export interface ITaskProps extends ITask {
    onChangeTask: (status: boolean) => void;
    onDeleteTask: () => void;
}
