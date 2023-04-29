import { useState } from "react";
import { Flex } from "../../css/css";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import { TaskAddProps } from "./types";

const TaskAdd: React.FC<TaskAddProps> = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState('');

    function onAddItemHandler() {
        if (inputValue.length > 3) {
            onAdd({
                name: inputValue,
                status: false
            })

            setInputValue('');
        }
    }

    return (
        <Flex>
            <Input type="text" value={inputValue} onChange={setInputValue}/>
            <Button type='button' onClick={onAddItemHandler}>Добавить задачу</Button>
        </Flex>
    )
}

export default TaskAdd;
