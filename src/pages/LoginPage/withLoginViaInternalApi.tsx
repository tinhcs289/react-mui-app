import loginApi from '@/api/authentication/loginApi';
import authentication from '@/appCookies/authentication';
import intOrDefault from '@/helpers/formatHelpers/intOrDefault';
import useSnackbarNotify from '@/hooks/useSnackbarNotify';
import PATHS from '@/routes/paths';
import type { AxiosResponse } from 'axios';
import type { FC } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ILoginPageProps, TLoginFormData } from './_types';
import { default as authenticationInLocalStorage } from '@/appLocalStorages/authentication';

const redirectToNextPage = () => {
  if (!(!!window && !!window?.location && typeof window.location.replace === 'function')) return;
  window.location.replace(PATHS.dashboard);
};

const withLoginViaInternalApi = (WrappedComponent: FC<ILoginPageProps>) => (props: ILoginPageProps) => {
  const { onRequestLoginViaSSO: _, loading: loadingProp, ...otherProps } = props;

  const { t } = useTranslation();

  const [loading, setLoading] = useState<boolean>(!!loadingProp);

  const { showErrorNotify } = useSnackbarNotify();

  const handleRequestLoginViaApi = async (fd: TLoginFormData): Promise<void> => {
    if (!fd?.Account || !fd?.Password) return;
    try {
      const res = await loginApi({
        username: fd?.Account,
        password: fd?.Password,
      });

      if (res?.status !== 200 || !res?.data?.jwt?.accessToken || !res?.data?.jwt?.refreshToken) throw res;

      authentication.set(res.data.jwt);
      authenticationInLocalStorage.set(res.data.jwt);
      redirectToNextPage();
    } catch (error) {
      console.log(error);
      const httpCode = (error as AxiosResponse<any, any>)?.status;

      showErrorNotify(
        `code: ${intOrDefault(httpCode)}, ${t('login:invalidAccountOrPassword')} ${t('or')} ${t(
          'somethingWentWrong_pleaseTryAgainLater',
        )}`,
      );
    } finally {
      setLoading(false);
    }
  };

  return <WrappedComponent {...otherProps} loading={loading} onSubmitLoginForm={handleRequestLoginViaApi} />;
};
export default withLoginViaInternalApi;
