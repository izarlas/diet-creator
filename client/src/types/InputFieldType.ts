import type React from 'react';
import type z from 'zod';

export type InputFieldType = {
  label: string;
  name: string;
  type: string;
  value: string;
  required: boolean;
  styles: string;
  validation: z.ZodTypeAny;
  validationRulesText: string;
  errors?: string[];
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
};
