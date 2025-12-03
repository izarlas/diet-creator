interface ButtonProps {
  name: string;
  handleClick: (event: React.FormEvent) => void | Promise<void>;
}

const Button = ({ name, handleClick }: ButtonProps) => {
  return (
    <div className="flex self-center">
      <button
        onClick={handleClick}
        type="submit"
        className="border p-2 cursor-pointer rounded-sm hover:bg-gray-800"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
