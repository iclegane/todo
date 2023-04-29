import { useState } from "react";
import { InputWrapper } from "./styles";
import { IInputProps } from "./types";

const Input: React.FC<IInputProps> = ({ onChange = () => {} }) => {
    const [value, setValue] = useState('');

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value);
        onChange(e.currentTarget.value);
    }
 
    return (
        <InputWrapper type="text" onChange={onChangeHandler} value={value}/>
    )
}

export default Input;
