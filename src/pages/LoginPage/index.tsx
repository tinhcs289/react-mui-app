import RHFCheck from '@/components/rhfInputs/RHFCheck';
import RHFText from '@/components/rhfInputs/RHFText';
import { required } from '@/constants/rhfRules';
import withHOCs from '@/hocs/withHocs';
import PATHS from '@/routes/paths';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTheme } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import type { ComponentType } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { defaultValues } from './constants';
// import withLoginViaInternalApi from './withLoginViaInternalApi';
import withLoginViaSSO from './withLoginViaSSO';
import withRedirectAfterLoginWithExternalQueryString from './withRedirectAfterLoginWithExternalQueryString';
import withReturnUri from './withReturnUri';
import type { ILoginPageProps, TLoginFormData } from './_types';
import withReduxAuthentication from './withReduxAuthentication';

const LoginPage: ComponentType<ILoginPageProps> = withHOCs(
  withReturnUri,
  withRedirectAfterLoginWithExternalQueryString,
  // withLoginViaInternalApi,
  withReduxAuthentication,
  withLoginViaSSO
)(function LoginPage(props) {
  const { onSubmitLoginForm, loading } = props;

  const theme = useTheme();

  const { t } = useTranslation();

  const { handleSubmit, control } = useForm<TLoginFormData>({ defaultValues });

  const onSubmit = (formData: TLoginFormData) => {
    onSubmitLoginForm?.(formData);
  };

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {t('login:login')}
      </Typography>
      <Box id="login-form" component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 4 }}>
        <RHFText
          id="login-form:text:account"
          name="Account"
          label={t('login:account')}
          control={control}
          rules={required(t('common:pleaseEnter'))}
          disabled={!!loading}
          sx={{ mb: theme.spacing(3) }}
          variant="bootstrap:outlined"
        />
        <RHFText
          id="login-form:text:password"
          name="Password"
          label={t('login:password')}
          type="password"
          control={control}
          rules={required(t('common:pleaseEnter'))}
          disabled={!!loading}
          sx={{ mb: theme.spacing(3) }}
          variant="bootstrap:outlined"
        />
        <RHFCheck
          id="login-form:check:remember-me"
          control={control}
          name="RememberMe"
          label={t('login:rememberMe')}
          disabled={!!loading}
        />
        <Button
          id="login-form:button:submit"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={!!loading}
        >
          {t('login:login')}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link id="login-form:link:forgot-password" component={RouterLink} to={PATHS.forgetPassword}>
              {t('login:forgotPassword')}
            </Link>
          </Grid>
          <Grid item>
            <Link id="login-form:link:dont-have-account-register" component={RouterLink} to={PATHS.register}>
              {t('login:dontHaveAccount_register')}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
});
export default LoginPage;
