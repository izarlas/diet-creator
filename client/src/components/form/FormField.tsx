import type { InputFieldType } from '../../types/InputFieldType';
import Button from '../Button';
import InputField from './input/InputField';

interface FormFieldProps {
  styles?: string;
  buttonLabel: string;
  inputFields: InputFieldType[];
  onSubmit: (event: React.FormEvent) => void | Promise<void>;
}

const FormField = ({
  styles,
  buttonLabel,
  inputFields,
  onSubmit,
}: FormFieldProps) => {
  const containerStyles: string = 'flex w-full mb-4 justify-between';
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
      onChange={inputField.onChange}
    />
  ));

  return (
    <form onSubmit={onSubmit} className={styles}>
      {fillInputFields}

      <Button name={buttonLabel} handleClick={onSubmit} />
    </form>
  );
};

export default FormField;
