import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';

interface IIconProps {
  asset: ImageSourcePropType;
}

const Icon = ({asset}: IIconProps) => {
  const styles = {
    width: 23,
    height: 23,
    margin: 12,
  };
  return <Image style={styles} source={asset} />;
};

export default Icon;
