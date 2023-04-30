export interface IButton {
    children: React.ReactNode;
    onClick?: () => void;
    type: 'button' | 'submit' | 'reset';
}
