import type { InputFieldType } from '../../../types/InputFieldType';
import QuestionMarkIcon from '../../icons/QuestionMarkIcon';
import InputValidationError from './InputValidationError';

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
  validationRulesText,
  errors = [],
  onChange,
}: InputFieldProps) => {
  return (
    <div className={containerStyles}>
      <div className="flex ">
        <div className="flex justify-between w-full mr-2">
          {label}
          <QuestionMarkIcon text={validationRulesText} />
        </div>

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          required={required}
          className={styles}
          onChange={onChange}
        />

        <InputValidationError errors={errors} />
      </div>
    </div>
  );
};

export default InputField;
