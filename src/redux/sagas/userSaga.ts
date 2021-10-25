import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import Api from '../../api';

import {LoginRequest} from '../../../types';
import * as utils from '../../utils';
import * as userActions from '../actions/userActions';

export function* loginSaga(action: LoginRequest) {
  try {
    const authData = yield call(Api.loginUser, action.payload);
    const {token, user} = authData;
    yield call(utils.setAuthToken, user.email, token);
    yield put(userActions.loginUserSuccess(user));
  } catch (error: any) {
    yield put(
      userActions.loginUserFailure({
        error,
      }),
    );
  }
}

export default function* userSaga() {
  yield takeLatest(types.LOGIN.REQUEST, loginSaga);
}
