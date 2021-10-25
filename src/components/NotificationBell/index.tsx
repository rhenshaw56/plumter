import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import Icon from '../Icon';

const TABS_WITH_NO_BELL = ['Cards'];

interface IProps {}

const NotificationBell = ({}: IProps) => {
  const { activeTab } = useSelector(
    (state: RootState) => state.app
  );

  if (TABS_WITH_NO_BELL.includes(activeTab)) return null;

  console.log('navigation', activeTab);
  return <Icon asset={require('../../assets/icons/bell.png')} />;
};

export default NotificationBell;
