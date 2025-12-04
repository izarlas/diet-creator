import z from 'zod';
import type { SignInForm } from '../interfaces/SignInForm';
import type { SignUpForm } from '../interfaces/SignUpForm';

export function validateFormFieldsAndGetErrors(
  validationSchema: z.ZodObject,
  formFields: Partial<SignInForm | SignUpForm>,
): Record<string, string[]> {
  const parsed = validationSchema.safeParse(formFields);

  if (!parsed.success) {
    const tree = z.treeifyError(parsed.error);
    const errors: Record<string, string[]> = {};

    if (tree.properties) {
      for (const key in tree.properties) {
        const field = tree.properties[key];

        if (field?.errors.length) {
          errors[key] = field.errors;
        }
      }
    }

    return errors;
  }

  return {};
}
