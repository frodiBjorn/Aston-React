interface IButtonProps {
  callBack?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: string;
  isDisabled?: boolean;
  type?: string;
}
const Button = ({ children, callBack, isDisabled }: IButtonProps) => {
  return (
    <button onClick={callBack} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
