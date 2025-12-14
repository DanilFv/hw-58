export interface IBtn {
    type: 'primary' | 'danger';
    label: string;
    onClick: () => void;
}
