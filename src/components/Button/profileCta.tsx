import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Spacer} from 'native-base';

// @ts-ignore
import Chevron from '../../assets/icons/chevron.svg';
import { lineHeight } from 'styled-system';

interface IIconProps {
  heading: string;
  caption: string;
}

const ProfileCta = ({heading, caption}: IIconProps) => {
  return (
    <TouchableOpacity style={styles.profileCta}>
      <View style={styles.content}>
        <Text style={styles.ctaHeading}>{heading}</Text>
        <Text style={styles.ctaCaption}>{caption}</Text>
      </View>
      <Spacer />
      <View style={styles.ctaIcon}>
        <Chevron />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileCta;

const styles = StyleSheet.create({
  profileCta: {
    backgroundColor: '#ffffff',
    height: 66,
    marginBottom: 10,
    flexDirection: 'row',
    paddingRight: 23,
    paddingLeft: 23,
    paddingTop: 17,
    paddingBottom: 14,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#EDEDED',
    shadowColor: 'rgba(226, 226, 226, 0.83)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 10,
  },
  content: {
    flexDirection: 'column',
  },
  ctaHeading: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 20,
    textAlign: 'left',
    color: '#000000',
    fontFamily: 'Graphik-Bold',
  },
  ctaCaption: {
    fontSize: 9,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 15,
    textAlign: 'left',
    color: '#000000',
    fontFamily: 'Graphik-Bold',
  },
  ctaIcon: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
