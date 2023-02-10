import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormByComponents from './FormByComponents';
import FormByConfig from './FormByConfig';

export default function DemoFormPage() {
  return (
    <Grid container sx={{ width: '100%' }}>
      <Grid item xs={12} md={6} container sx={{ p: 1 }}>
        <Paper elevation={4}>
          <FormByConfig />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} container sx={{ p: 1 }}>
        <Paper elevation={4}>
          <FormByComponents />
        </Paper>
      </Grid>
    </Grid>
  );
}
