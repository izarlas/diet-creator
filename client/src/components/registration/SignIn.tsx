import { useState } from 'react';
import type { SignInForm } from '../../interfaces/SignInForm';
import FormField from '../form/FormField';
import type { InputFieldType } from '../../types/InputFieldType';

const SignIn = () => {
  const [formFields, setFormFields] = useState<Partial<SignInForm>>({});
  const formStyles: string = 'flex flex-col items-center justify-center';

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('');
    console.log('Signed in!');
    setFormFields({});
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
      onChange: handleChange,
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      value: formFields.password ?? '',
      required: true,
      styles: 'border',
      onChange: handleChange,
    },
  ];

  return (
    <FormField
      styles={formStyles}
      buttonLabel={'Sign in'}
      inputFields={inputFields}
      onSubmit={handleSubmit}
    />
  );
};

export default SignIn;
