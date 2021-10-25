import {format} from 'date-fns';
import * as Keychain from 'react-native-keychain';

export const wait = (time: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, time));
};

export const getDateTimeString = (timeStamp: number) => {
  const TIME_FORMAT = 'd MMM, HH:mm aaa';
  return format(new Date(timeStamp), TIME_FORMAT);
};

export const validateEmail = (text: string) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(text) === false) {
    return 'Email is not valid';
  }
  return;
};

export const validatePassword = (text: string) => {
  if (text.length < 7) {
    return 'Password is too short';
  }
  return;
};

export const setAuthToken = async (key: string, accessToken: string) => {
  await Keychain.setGenericPassword(key, accessToken);
};

export const getAuthCredentials = async () => {
  await Keychain.getGenericPassword();
};

export const clearAuthCredentials = async () => {
  await Keychain.resetGenericPassword();
};
