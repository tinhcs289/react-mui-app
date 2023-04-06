import type { CheckGroupOption } from '@/components/rhfInputs/RHFCheckGroup';
import type { RadioGroupOption } from '@/components/rhfInputs/RHFRadioGroup';
import type { AutoCompleteOption } from '@/components/rhfInputs/RHFSelect';
import type { SwitchGroupOption } from '@/components/rhfInputs/RHFSwitchGroup';
import type { CommonTagInputItem } from '@/components/rhfInputs/RHFTagInput';
import type { Moment } from 'moment';

export type TFormData = {
  TextField?: string;
  SelectField?: AutoCompleteOption;
  SelectMultiField?: AutoCompleteOption[];
  RadioField?: boolean;
  CheckField?: boolean;
  SwitchField?: boolean;
  SelectBooleanField?: boolean;
  DateField?: Moment;
  DateTimeField?: Moment;
  TimeField?: Moment;
  DateMultiField?: Moment[];
  DateMultiField2?: Moment[];
  DateMultiField3?: Moment[];
  CheckGroupField?: CheckGroupOption[];
  RadioGroupField?: RadioGroupOption[];
  SwithGroupField?: SwitchGroupOption[];
  TagInputField?: CommonTagInputItem[];
  NumberField?: number;
};
