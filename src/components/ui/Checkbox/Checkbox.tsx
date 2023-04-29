import { CheckboxLabel, CheckboxWrapper, HiddenCheckbox } from "./styles";
import { ICheckboxProps } from "./types";

const Checkbox: React.FC<ICheckboxProps> = ({ children, checked, onChange, ...props }) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    }

    return (
        <CheckboxWrapper>
            <HiddenCheckbox type="checkbox" onChange={onChangeHandler} checked={checked} />
            <CheckboxLabel>{children}</CheckboxLabel>
        </CheckboxWrapper>
    )
}

export default Checkbox;
