import type { SignInForm } from './SignInForm';

export interface SignUpForm extends SignInForm {
  email: string;
}
