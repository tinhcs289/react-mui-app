import CommonTextField from '@/components/inputs/CommonTextField';
import { TimePicker } from '@mui/x-date-pickers';
import React from 'react';
import { DEFAULT_FORMAT, DEFAULT_MASK } from './constants';
import type { TCommonTimeFieldProps } from './_types';

const CommonTimeField: React.FC<TCommonTimeFieldProps> = (props) => {
  const { inputFormat, mask, InputProps, error, errorText, ...otherProps } = props;
  return (
    <TimePicker
      {...otherProps}
      inputFormat={inputFormat || DEFAULT_FORMAT}
      mask={mask || DEFAULT_MASK}
      {...(!!error ? { error } : {})}
      renderInput={(inputProps) => {
        return <CommonTextField {...inputProps} error={error} errorText={errorText} />;
      }}
    />
  );
};
export default CommonTimeField;
