import z from 'zod';

export const SignInSchema: z.ZodObject = z.object({
  username: z
    .string()
    .min(4, { message: 'Username requires at least 4 characters' }),
  password: z
    .string()
    .min(8, { message: 'Password requires at least 8 characters' })
    .refine((value) => /[A-Z]/.test(value), {
      message: 'Password requires an uppercase character',
    })
    .refine((value) => /[0-9]/.test(value), {
      message: 'Password requires a number',
    })
    .refine((value) => /[^A-Za-z0-9]/.test(value), {
      message: 'Password requires a special character',
    }),
});
