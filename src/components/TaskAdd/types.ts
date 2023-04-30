import { ITask } from "../../types/task";

export interface TaskAddProps {
    onAdd: (task: ITask) => void;
}