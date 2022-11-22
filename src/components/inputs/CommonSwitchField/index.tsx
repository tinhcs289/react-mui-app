import InputErrorTextWithIcon from '@/components/inputs/InputErrorTextWithIcon';
import { useTheme } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import React from 'react';
import type { TCommonSwitchFieldProps } from './_types';

const CommonSwitchField: React.FC<TCommonSwitchFieldProps> = (props) => {
  const { name, label, error, checked, value, onChange, errorText, required, inputProps, ...formControlProps } = props;
  const theme = useTheme();
  return (
    <FormControlLabel
      label={
        <>
          {label}
          {required ? ` *` : ''}
        </>
      }
      control={
        <>
          <Switch
            name={name}
            checked={!!checked}
            onChange={onChange}
            value={value}
            color="primary"
            {...(!!error ? { style: { ...(inputProps?.style || {}), color: theme.palette.error.main } } : {})}
            {...inputProps}
          />
          {!!error && !!errorText && <InputErrorTextWithIcon>{errorText}</InputErrorTextWithIcon>}
        </>
      }
      {...formControlProps}
    />
  );
};
export default CommonSwitchField;