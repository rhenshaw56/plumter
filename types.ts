import {Dispatch, SetStateAction} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as types from './src/redux/actions/types';

export interface InitialParams {
  index: number;
  setActiveTab: Dispatch<SetStateAction<TabScreenType>>;
}

export type StackParamList = {
  Home: undefined;
  Login: undefined;
  Account: undefined;
  Cards: undefined;
  Reader: undefined;
  Share: undefined;
};

export interface GenericObject<T = any> {
  [key: string]: T;
}

export type TabScreenType = 'Home' | 'Cards' | 'Reader' | 'Share';
export type StackScreenType = 'Account' | 'Login';

export type ScreenType = TabScreenType | StackScreenType;

export type NavigationProp<T extends keyof StackParamList> =
  NativeStackNavigationProp<StackParamList, T>;

export interface UserState {
  loading: boolean;
  // TODO: type currentUser
  currentUser: any;
  error: string | null;
  isLoggedIn: boolean;
}

export interface AppState {
  activeTab: TabScreenType | string;
}

export interface LoginSuccessPayload {
}

export interface LoginInfo {
  email: string;
  password: string;
}

export interface LoginFailurePayload {
  error: string;
}

export type LoginRequest = {
  type: typeof types.LOGIN.REQUEST;
  payload: LoginInfo;
};

export type LoginSuccess = {
  type: typeof types.LOGIN.SUCCESS;
  payload: LoginSuccessPayload;
};

export type LoginFailure = {
  type: typeof types.LOGIN.FAILURE;
  payload: LoginFailurePayload;
};

export type SetActiveTab = {
  type: typeof types.APP.SET_ACTIVE_TAB;
  activeTab: TabScreenType;
};

export type UserActions = LoginRequest | LoginSuccess | LoginFailure;

export type AppActions = SetActiveTab;

export type Action = UserActions | AppActions;
