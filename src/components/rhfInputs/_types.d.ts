import type { ReactElement } from 'react';
import type {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormStateReturn,
} from 'react-hook-form';
export type RHFRules = Omit<
  RegisterOptions<FieldValues, FieldPath<FieldValues>>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
>;
export type RHFInputProps = {
  name: string;
  control: Control<any, any>;
  shouldUnregister?: boolean;
  rules?: RHFRules;
};
export type RHFRenderInputArgs = {
  field: ControllerRenderProps<FieldValues, any>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
};
export type RHFRenderInput = (args: RHFRenderInputArgs) => ReactElement<any>;
