import * as types from './types';

import {
  LoginInfo,
  LoginRequest,
  LoginSuccessPayload,
  LoginSuccess,
  LoginFailure,
  LoginFailurePayload,
} from '../../../types';

export const loginUser = (userInfo: LoginInfo): LoginRequest => ({
  type: types.LOGIN.REQUEST,
  payload: userInfo,
});

export const loginUserSuccess = (
  payload: LoginSuccessPayload,
): LoginSuccess => ({
  type: types.LOGIN.SUCCESS,
  payload,
});

export const loginUserFailure = (
  payload: LoginFailurePayload,
): LoginFailure => ({
  type: types.LOGIN.FAILURE,
  payload,
});
