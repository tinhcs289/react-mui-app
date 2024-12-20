import { HttpRequestStatus } from '@/constants/apiRequestStatus';
import { createCase } from '@/helpers/reduxHelpers';
import type { State } from '../../state';
import { rootName } from '../../state';
const TYPE = `${rootName}/requestLogin_clearStatus`;
const clearStatusOfRequestLogin = createCase<any, State>(TYPE, (_action, state) => {
  return {
    ...(state as any),
    loginRequestStatus: HttpRequestStatus.NONE,
  };
});
export default clearStatusOfRequestLogin;
