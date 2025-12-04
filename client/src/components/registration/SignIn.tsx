import { useState } from 'react';
import type { SignInForm } from '../../interfaces/SignInForm';
import FormField from '../form/FormField';
import type { InputFieldType } from '../../types/InputFieldType';
import { SignInSchema } from '../../validations/sign-in-validation';
import { validateFormFieldsAndGetErrors } from '../../utils/validation';

const SignIn = () => {
  const [formFields, setFormFields] = useState<Partial<SignInForm>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({});
  const formStyles: string = 'flex flex-col items-center justify-center';

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateFormFieldsAndGetErrors(
      SignInSchema,
      formFields,
    );

    setFormErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const response = await fetch('');
    console.log('Signed in!');
    setFormFields({});
    setFormErrors({});
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    });
  };

  const inputFields: InputFieldType[] = [
    {
      label: 'Username',
      name: 'username',
      type: 'text',
      value: formFields.username ?? '',
      required: true,
      styles: 'border',
      validation: SignInSchema.shape.username,
      validationRulesText: 'Username requires at least 4 characters',
      errors: formErrors.username ?? [],
      onChange: handleChange,
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      value: formFields.password ?? '',
      required: true,
      styles: 'border',
      validation: SignInSchema.shape.password,
      validationRulesText:
        'Password requires at least 8 characters, an uppercase character, a number and a special character',
      errors: formErrors.password ?? [],
      onChange: handleChange,
    },
  ];

  const disableButtonState =
    (formFields.username?.length ?? 0) < 4 ||
    (formFields.password?.length ?? 0) < 8;

  return (
    <FormField
      styles={formStyles}
      buttonLabel={'Sign in'}
      inputFields={inputFields}
      disableButtonState={disableButtonState}
      onSubmit={handleSubmit}
    />
  );
};

export default SignIn;
