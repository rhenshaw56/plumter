import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';

interface IIconProps {
  asset: ImageSourcePropType;
  height?: number;
  width?: number;
}

const Icon = ({asset, height, width}: IIconProps) => {
  const styles = {
    width: width || 23,
    height: height || 23,
    margin: 12,
  };
  return <Image style={styles} source={asset} />;
};

export default Icon;
