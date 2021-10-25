import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

import Icon from '../Icon';

interface IIconProps {
  text: string;
  icon?: ImageSourcePropType;
  iconText?: string;
}

const CardCta = ({text, icon, iconText}: IIconProps) => {
  return (
    <TouchableOpacity style={styles.cardCta}>
      {icon && (
        <View style={styles.ctaIcon}>
          <Icon style={styles.icon} asset={icon} />
        </View>
      )}
      {iconText && (
        <View style={styles.ctaIconText}>
          <Text style={styles.iconText}>{iconText}</Text>
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.ctaText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardCta;

const styles = StyleSheet.create({
  cardCta: {
    backgroundColor: '#e3f0ff',
    height: 43,
    width: 106,
    margin: 2,
    flexDirection: 'row',
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#ededed',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'center',
  },
  icon: {
    width: 18,
    height: 18,
    margin: 0,
    marginRight: 5,
  },
  ctaText: {
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#3581F3',
    fontFamily: 'Graphik-Bold',
    textAlign: 'center',
  },
  ctaIcon: {
    justifyContent: 'center',
    lineHeight: 13,
    fontSize: 10,
  },
  ctaIconText: {
    justifyContent: 'center',
    marginRight: 5,
  },
  iconText: {
    color: '#3581F3',
    fontFamily: 'Graphik-Bold',
  },
});
