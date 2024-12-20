import type { LogoutApiReturns } from '@/api/authentication/logoutApi';
import logoutApi from '@/api/authentication/logoutApi';
import { HttpRequestStatus } from '@/constants/apiRequestStatus';
import type { ReduxAction } from '@/helpers/reduxHelpers';
import { createCase } from '@/helpers/reduxHelpers';
import type { AxiosResponse } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import type { State } from '../../state';
import { rootName } from '../../state';
import requestLogoutFail from './requestLogout.fail';
import requestLogoutSuccess from './requestLogout.success';
const TYPE = `${rootName}/requestLogout`;
const requestLogout = createCase<any, State>(
  TYPE,
  (action, state) => {
    return {
      ...(state as any),
      logoutRequestStatus: HttpRequestStatus.REQUESTING,
    };
  },
  takeLatest(TYPE, function* (_action: ReduxAction<any>) {
    const response = (yield logoutApi()) as AxiosResponse<LogoutApiReturns>;
    if (response?.status !== 200) {
      yield put(requestLogoutFail.action({}));
      return;
    }
    yield put(requestLogoutSuccess.action({}));
  })
);
export default requestLogout;
