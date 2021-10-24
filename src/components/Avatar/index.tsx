import React, {ReactElement} from 'react';
import {
  View,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Avatar as NBAvatar} from 'native-base';

// @ts-ignore
import Logo from '../../assets/icons/logo.svg';

interface IProps {
  asset: ImageSourcePropType;
  onPress?: (e: GestureResponderEvent) => void;
  size?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const Avatar = ({
  asset,
  onPress,
  size,
  containerStyle,
}: IProps): ReactElement => {
  return (
    <View style={containerStyle || styles.container}>
      <TouchableOpacity onPress={onPress}>
        <NBAvatar size={size} source={asset}>
          <NBAvatar.Badge style={styles.badge}>
            <View style={styles.badgeLogo}>
              <Logo />
            </View>
          </NBAvatar.Badge>
        </NBAvatar>
      </TouchableOpacity>
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
