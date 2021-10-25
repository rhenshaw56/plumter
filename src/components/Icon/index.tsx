import React from 'react';
import {Image, ImageSourcePropType, StyleProp, ImageStyle} from 'react-native';

interface IIconProps {
  asset: ImageSourcePropType;
  height?: number;
  width?: number;
  margin?: number;
  style?: StyleProp<ImageStyle> | undefined;
}

const Icon = ({asset, height, width, style}: IIconProps) => {
  const styles = {
    width: width || 23,
    height: height || 23,
    margin: 12,
  };
  return <Image style={style || styles} source={asset} />;
};

export default Icon;
