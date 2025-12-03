import { useState } from 'react';
import type { InputFieldType } from '../../types/InputFieldType';
import type { SignUpForm } from '../../interfaces/SignUpForm';
import FormField from '../form/FormField';

const SignUp = () => {
  const [formFields, setFormFields] = useState<Partial<SignUpForm>>({});
  const formStyles: string = 'flex flex-col items-center justify-center';

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('');
    console.log('Signed up!');
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
      label: 'Email',
      name: 'email',
      type: 'email',
      value: formFields.email ?? '',
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
      buttonLabel={'Sign up'}
      inputFields={inputFields}
      onSubmit={handleSubmit}
    />
  );
};

export default SignUp;
