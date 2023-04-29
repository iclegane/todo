import { CheckboxLabel, CheckboxWrapper, HiddenCheckbox } from "./styles";
import { ICheckboxProps } from "./types";

const Checkbox: React.FC<ICheckboxProps> = ({ children, checked, onChange }) => {
    return (
        <CheckboxWrapper>
            <HiddenCheckbox type="checkbox" onChange={onChange} checked={checked} />
            <CheckboxLabel>{children}</CheckboxLabel>
        </CheckboxWrapper>
    )
}

export default Checkbox;
