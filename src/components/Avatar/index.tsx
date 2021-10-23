import React, {ReactElement} from 'react';
import {View, StyleSheet, ImageSourcePropType} from 'react-native';
import {Avatar as NBAvatar} from 'native-base';

// @ts-ignore
import Logo from '../../assets/icons/logo.svg';

interface IProps {
  asset: ImageSourcePropType;
}

const Avatar = ({asset}: IProps): ReactElement => {
  return (
    <View style={styles.container}>
      <NBAvatar source={asset}>
        <NBAvatar.Badge style={styles.badge}>
          <View style={styles.badgeLogo}>
            <Logo />
          </View>
        </NBAvatar.Badge>
      </NBAvatar>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 63,
  },
  badge: {
    backgroundColor: '#3581f3',
    borderColor: '#3581f3',
    height: 17,
    width: 17,
  },
  badgeLogo: {
    justifyContent: 'center',
    padding: 4,
  },
});
