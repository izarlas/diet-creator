import { useState } from 'react';
import type { InputFieldType } from '../../types/InputFieldType';
import type { SignUpForm } from '../../interfaces/SignUpForm';
import FormField from '../form/FormField';
import { SignUpSchema } from '../../validations/sign-up-validation';
import { validateFormFieldsAndGetErrors } from '../../utils/validation';

const SignUp = () => {
  const [formFields, setFormFields] = useState<Partial<SignUpForm>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({});
  const formStyles: string = 'flex flex-col items-center justify-center';

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateFormFieldsAndGetErrors(
      SignUpSchema,
      formFields,
    );

    setFormErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const response = await fetch('');
    console.log('Signed up!');
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
      validation: SignUpSchema.shape.username,
      validationRulesText: 'Username requires at least 4 characters',
      errors: formErrors.username ?? [],
      onChange: handleChange,
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      value: formFields.email ?? '',
      required: true,
      styles: 'border',
      validation: SignUpSchema.shape.email,
      validationRulesText:
        "Email requires a '@' and a valid domain suffix with a dot '.'",
      errors: formErrors.email ?? [],
      onChange: handleChange,
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      value: formFields.password ?? '',
      required: true,
      styles: 'border',
      validation: SignUpSchema.shape.password,
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
      buttonLabel={'Sign up'}
      inputFields={inputFields}
      disableButtonState={disableButtonState}
      onSubmit={handleSubmit}
    />
  );
};

export default SignUp;
