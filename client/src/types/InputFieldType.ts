import type React from 'react';

export type InputFieldType = {
  label: string;
  name: string;
  type: string;
  value: string;
  required: boolean;
  styles: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
};
