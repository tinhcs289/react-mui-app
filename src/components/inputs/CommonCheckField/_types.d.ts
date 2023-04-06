import type { CheckboxProps } from '@mui/material/Checkbox';
import type { FormControlLabelProps } from '@mui/material/FormControlLabelProps';
import type { ChangeEvent, ReactNode } from 'react';

export type CommonCheckFieldProps = {
  name?: string;
  required?: boolean;
  error?: boolean;
  errorText?: ReactNode;
  checked?: boolean;
  value?: unknown;
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  inputProps?: Omit<CheckboxProps, 'checked' | 'error' | 'onChange' | 'value' | 'name'>;
} & Omit<FormControlLabelProps, 'control'>;
