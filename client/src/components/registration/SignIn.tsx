import { useState } from 'react';
import Button from '../Button';
import type { SignInForm } from '../../types/SignInForm';

const SignIn = () => {
  const [formFields, setFormFields] = useState<Partial<SignInForm>>({});

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

    console.log('==form fields===>', formFields);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center"
    >
      <div className="flex w-full mb-4 justify-between">
        Username{' '}
        <input
          name="username"
          type="text"
          value={formFields.username ?? ''}
          required
          className="border"
          onChange={handleChange}
        />
      </div>

      <div className="flex w-full mb-4 justify-between">
        Password{' '}
        <input
          name="password"
          type="password"
          value={formFields.password ?? ''}
          required
          className="border"
          onChange={handleChange}
        />
      </div>

      <Button name={'Sign in'} handleClick={handleSubmit} />
    </form>
  );
};

export default SignIn;
