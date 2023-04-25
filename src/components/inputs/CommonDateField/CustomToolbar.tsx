import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import { useMemo } from 'react';
import { DEFAULT_FORMAT } from './constants';
import type { CustomToolbarProps } from './_types';
export default function CustomToolbar(props: CustomToolbarProps) {
  const { className, label, value, toolbarFormat } = props;
  const $DateText = useMemo(() => {
    if (!value || !moment(value).isValid())
      return (
        <Typography variant="h6" color="GrayText" sx={{ opacity: 0.3 }}>
          {DEFAULT_FORMAT}
        </Typography>
      );
    const text = moment(value).format(toolbarFormat || DEFAULT_FORMAT);
    return <Typography variant="h6">{text}</Typography>;
  }, [value, toolbarFormat]);
  return (
    <DialogTitle className={className} component="div">
      <Typography color="GrayText">{label}</Typography>
      {$DateText}
    </DialogTitle>
  );
}