interface ButtonProps {
  name: string;
  disabled: boolean;
  handleClick: (event: React.FormEvent) => void | Promise<void>;
}

const Button = ({ name, handleClick, disabled = false }: ButtonProps) => {
  const disabledStyle = 'cursor-not-allowed bg-gray-400 opacity-45';
  const enabledStyle = 'cursor-pointer hover:bg-green-900/90';
  const buttonStyle = `border p-2 rounded-sm ${disabled ? disabledStyle : enabledStyle}`;

  return (
    <div className="flex self-center">
      <button
        type="submit"
        onClick={handleClick}
        disabled={disabled}
        className={buttonStyle}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
