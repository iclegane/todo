import { IButton } from "./types";
import { ButtonWrapper } from "./styles";

const Button: React.FC<IButton> = ({ children, type, onClick }) => {
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.();
    }

    return (
        <ButtonWrapper type={type} onClick={onClickHandler}>
            {children}
        </ButtonWrapper>
    )
}

export default Button;
