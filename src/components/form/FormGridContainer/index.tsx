import type { BoxProps } from '@mui/material/Box';
import Box from '@mui/material/Box';
import type { GridProps } from '@mui/material/Grid';
import Grid from '@mui/material/Grid';
import type { FormEventHandler } from 'react';
import { useMemo } from 'react';

export default function FormGridContainer(
  props: { onSubmit?: FormEventHandler<HTMLFormElement>; formProps?: BoxProps<'form'> } & GridProps
) {
  const { children, onSubmit, formProps, sx, ...otherProps } = props;

  const memoFormProps = useMemo(() => {
    if (!formProps) return { noValidate: true };
    else return { noValidate: true, ...formProps };
  }, [formProps]);

  return (
    <Box {...memoFormProps} component="form" onSubmit={onSubmit} sx={{ ...formProps?.sx, m: 0, p: 0 }}>
      <Grid {...otherProps} sx={{ width: '100%', height: '100%', ...sx }} container>
        {children}
      </Grid>
    </Box>
  );
}