import z from 'zod';
import { SignInSchema } from './sign-in-validation';

export const SignUpSchema: z.ZodObject = SignInSchema.extend({
  email: z.email({
    message: 'Invalid email address format',
  }),
});
