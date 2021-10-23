import React, {ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Spacer, Divider, Avatar} from 'native-base';

import {getDateTimeString} from '../../utils';

interface IProps {
  description: string;
  divider: boolean;
  type: 'credit' | 'debit';
  currency: string;
  amount: number;
  timeStamp: number;
}

const AccountHistory = ({
  description,
  divider,
  type,
  currency,
  amount,
  timeStamp,
}: IProps): ReactElement => {
  const amountPrefixMap = {
    credit: '+',
    debit: '-',
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Avatar size="sm" />
        </View>
        <View style={styles.details}>
          <Text style={styles.desc}>{description}</Text>
          <Text style={styles.time}>{getDateTimeString(timeStamp)}</Text>
        </View>
        <Spacer />
        <View style={styles.amount}>
          <Text style={styles.amount[type]}>
            {amountPrefixMap[type]}
            {currency}
            {amount}
          </Text>
        </View>
      </View>
      {divider && <Divider />}
    </>
  );
};

export default AccountHistory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
  avatar: {
    flexDirection: 'column',
  },
  details: {
    flexDirection: 'column',
    marginLeft: 15,
    padding: 5,
    lineHeight: 15,
  },
  amount: {
    flexDirection: 'row',
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 15,
    fontFamily: 'Graphik-Bold',
    marginBottom: 5,
    credit: {
      color: '#65B634',
    },
    debit: {
      color: '#D80027',
    },
  },
  desc: {
    flexDirection: 'row',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 13,
    color: '#000000',
    fontFamily: 'Graphik-Bold',
    marginBottom: 5,
  },
  time: {
    flexDirection: 'row',
    fontSize: 8,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 9,
    color: '#9B9B9B',
    fontFamily: 'Graphik-Bold',
  },
});
