import type { TCheckGroupOption } from '@/components/inputs/CommonCheckGroupField/_types';
import type { TRadioGroupOption } from '@/components/inputs/CommonRadioGroupField/_types';
import type { TAutoCompleteOption } from '@/components/inputs/CommonSelectField/_types';
import consecutiveNumbers from '@/helpers/arrayHelpers/consecutiveNumbers';
import type { TFormData } from './_types';

export const LABEL = 'Lorem ipsum dolor sit amet';
export const LABEL1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const optionsCheck: TCheckGroupOption[] = consecutiveNumbers(5, 1).map((i) => ({
  label: `${LABEL1} ${i}`,
  value: `${i}`,
}));

export const optionRadio: TRadioGroupOption[] = consecutiveNumbers(5, 1).map((i) => ({
  label: `${LABEL1} ${i}`,
  value: `${i}`,
}));

export const options: TAutoCompleteOption[] = consecutiveNumbers(20, 1).map((i) => ({
  label: `lựa chọn ${i}`,
  value: `${i}`,
}));

export const defaultValues: TFormData = {
  TextField: '',
  SelectField: undefined,
  SelectMultiField: undefined,
  RadioField: false,
  CheckField: false,
  SwitchField: false,
  SelectBooleanField: undefined,
  DateField: undefined,
  DateTimeField: undefined,
  TimeField: undefined,
  DateMultiField: undefined,
  DateMultiField2: undefined,
  CheckGroupField: undefined,
  RadioGroupField: undefined,
  SwithGroupField: undefined,
  TagInputField: undefined,
  NumberField: undefined,
};
