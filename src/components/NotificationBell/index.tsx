import React from 'react';
import Icon from '../Icon';

interface IProps {
  hidden?: boolean;
}

const NotificationBell = ({hidden}: IProps) => {
  if (hidden) {
    return null;
  }

  return <Icon asset={require('../../assets/icons/bell.png')} />;
};

export default NotificationBell;
