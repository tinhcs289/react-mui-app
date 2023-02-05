import { styled } from '@mui/material';
import type { FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

const FormControlLabelStyled = styled(FormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& span.MuiSwitch-root': {
    marginBottom: '0 !important',
  },
}));
export default FormControlLabelStyled;
