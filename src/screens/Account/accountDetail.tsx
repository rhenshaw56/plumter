import React, {ReactElement} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from 'react-native';
import {GenericObject} from '../../../types';

import Icon from '../../components/Icon';

interface IProps {
  currency: string;
  balance: number;
  symbol: string;
}

const AccountDetail = ({currency, balance, symbol}: IProps): ReactElement => {
  const logoMap: GenericObject<ImageSourcePropType> = {
    Dollar: require('../../assets/images/usa.png'),
    Naira: require('../../assets/images/nga.png'),
  };

  return (
    <View style={styles.container}>
      <View style={styles.countryLogo}>
        <Icon height={19} width={19} asset={logoMap[currency]} />
      </View>
      <Text style={styles.balance}>
        {symbol}
        {balance}
      </Text>
      <Text style={styles.desc}>{currency} balance</Text>

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => {}}>
        <Text style={styles.buttonTextStyle}>Add Money</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountDetail;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 180,
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

    marginRight: 14,
  },
  countryLogo: {},
  balance: {
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
    height: 22,
    color: '#000000',
    fontFamily: 'Graphik-Bold',
    marginLeft: 12,
    marginTop: 19,
  },
  desc: {
    flexDirection: 'row',
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 13,
    color: '#9B9B9B',
    fontFamily: 'Graphik-Regular',
    marginLeft: 12,
    marginTop: 4,
  },
  buttonTextStyle: {
    color: '#3581f3',
    fontFamily: 'Graphik-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9,
    lineHeight: 16,
    textAlign: 'center',
  },
  buttonStyle: {
    fontSize: 9,
    backgroundColor: '#f4f9ff',
    borderColor: '#dadae8',
    borderRadius: 4,
    borderWidth: 1,
    height: 25,
    width: 83,
    marginTop: 60,
    marginLeft: 12,
    justifyContent: 'center',
    marginBottom: 18,
  },
});
