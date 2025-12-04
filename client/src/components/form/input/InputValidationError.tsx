interface InputValidationErrorProps {
  errors: string[];
}

const InputValidationError = ({ errors = [] }: InputValidationErrorProps) => {
  if (errors.length === 0) return null;

  return (
    <div className="text-red-500 mt-1">
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </div>
  );
};
export default InputValidationError;
