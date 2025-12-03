import type { InputFieldType } from '../../../types/InputFieldType';

interface InputFieldProps extends InputFieldType {
  containerStyles?: string;
}

const InputField = ({
  containerStyles,
  label,
  name,
  type,
  value,
  required,
  styles,
  onChange,
}: InputFieldProps) => {
  return (
    <div className={containerStyles}>
      {label}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        required={required}
        className={styles}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
