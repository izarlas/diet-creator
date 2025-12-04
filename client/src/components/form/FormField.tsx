import type { InputFieldType } from '../../types/InputFieldType';
import Button from '../Button';
import InputField from './input/InputField';

interface FormFieldProps {
  styles?: string;
  buttonLabel: string;
  inputFields: InputFieldType[];
  disableButtonState: boolean;
  onSubmit: (event: React.FormEvent) => void | Promise<void>;
}

const FormField = ({
  styles,
  buttonLabel,
  inputFields,
  disableButtonState,
  onSubmit,
}: FormFieldProps) => {
  const containerStyles: string = 'flex flex-col w-full mb-4 justify-between';

  const fillInputFields = inputFields.map((inputField, index) => (
    <InputField
      key={index}
      containerStyles={containerStyles}
      label={inputField.label}
      name={inputField.name}
      type={inputField.type}
      value={inputField.value}
      required={inputField.required}
      styles={inputField.styles}
      validation={inputField.validation}
      validationRulesText={inputField.validationRulesText}
      errors={inputField.errors}
      onChange={inputField.onChange}
    />
  ));

  return (
    <form onSubmit={onSubmit} className={styles}>
      {fillInputFields}

      <Button
        name={buttonLabel}
        handleClick={onSubmit}
        disabled={disableButtonState}
      />
    </form>
  );
};

export default FormField;
