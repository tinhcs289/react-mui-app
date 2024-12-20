import type { CommonTextFieldProps } from '@/components/inputs/CommonTextField';
import { AnyObject } from '@/types';
import type {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteProps,
  AutocompleteRenderGetTagProps,
  AutocompleteOwnerState,
} from '@mui/material/Autocomplete';
import type { ChipTypeMap } from '@mui/material/Chip';
import type { ReactNode } from 'react';
export type AutoCompleteOption<OptionData extends AnyObject = AnyObject> = OptionData & {
  label: string;
  value: string;
  disabled?: boolean;
  [x: string]: any;
};
export type BaseAutocompleteProps = AutocompleteProps<
  AutoCompleteOption,
  boolean | undefined,
  boolean | undefined,
  boolean | undefined,
  ChipTypeMap['defaultComponent']
>;
export type CommonSelectFieldProps = Pick<
  CommonTextFieldProps,
  'label' | 'error' | 'required' | 'errorText' | 'placeholder'
> &
  Omit<BaseAutocompleteProps, 'renderInput' | 'options'> & {
    options?: AutoCompleteOption[];
    TextFieldProps?: Partial<CommonTextFieldProps>;
    enableClientFilter?: boolean;
    filter?: ((option: AutoCompleteOption, inputValue: string) => boolean) | 'startWith' | 'contains';
  };
export type CommonSelectFieldOnChange = (
  event: React.SyntheticEvent<Element, Event>,
  value: NonNullable<string | AutoCompleteOption> | (string | AutoCompleteOption)[] | null,
  reason: AutocompleteChangeReason,
  details: AutocompleteChangeDetails<AutoCompleteOption> | undefined
) => void;
export type CommonSelectRenderTags = (
  value: AutoCompleteOption[],
  getTagProps: AutocompleteRenderGetTagProps,
  ownerState: AutocompleteOwnerState<AutoCompleteOption, boolean, boolean, boolean, 'div'>
) => ReactNode;
