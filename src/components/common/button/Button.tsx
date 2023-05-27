import { ReactNode } from "react";
import "./Button.css";
interface Props {
  children: ReactNode;
  className: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
