import {AxiosResponse} from 'axios';
import axiosInstance from './axiosInstance';
import {LoginInfo} from '../../types';

export const loginUser = async (userInfo: LoginInfo) => {
  const headers = {
    'content-type': 'application/json',
  };
  const response: AxiosResponse<any> = await axiosInstance.post(
    'auth/login',
    {
      ...userInfo,
    },
    {
      headers,
    },
  );
  if (response.status !== 200) {
    throw response;
  } else {
    return response.data;
  }
};
