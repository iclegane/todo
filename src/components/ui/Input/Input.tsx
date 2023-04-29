import { InputWrapper } from "./styles";
import { IInputProps } from "./types";

const Input: React.FC<IInputProps> = ({ 
    value = '', 
    type = 'text',
    onChange = () => {}
}) => {

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value;
        onChange?.(newValue);
    }
 
    return (
        <InputWrapper 
            type={type}
            onChange={onChangeHandler} 
            value={value}
        />
    )
}

export default Input;
