export interface IButtonProps {
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  color?: string;
  label?: string;
  className?: string;
  children?: any;
}
