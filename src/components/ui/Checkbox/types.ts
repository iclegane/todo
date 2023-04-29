export interface ICheckboxProps {
    checked: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
}
