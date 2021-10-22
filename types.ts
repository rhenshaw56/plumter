import {Dispatch, SetStateAction} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
