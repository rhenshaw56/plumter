import React, {ReactElement, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import Avatar from '../../components/Avatar';
import {HorizontalList, VerticalList} from '../../components/List';
import {InitialParams, NavigationProp} from '../../../types';
import AccountDetail from './accountDetail';
import AccountHistory from './accountHistory';

import data from './mock.json';

interface IProps {
  navigation: NavigationProp<'Reader'>;
  index: number;
  setActiveTab: InitialParams['setActiveTab'];
}

const Account = (props: IProps): ReactElement => {
  const {navigation, setActiveTab, index} = props;
  const currentIndex = navigation.getState().index;

  useEffect(() => {
    if (currentIndex === index) {
      setActiveTab('Home');
    }
  }, [currentIndex, index, setActiveTab]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.scrollStyle}
        contentContainerStyle={styles.scrollStyle}>
        <View style={styles.container}>
          <View style={styles.user}>
            {/*TODO: Pass source/url prop here*/}
            <Avatar asset={require('../../assets/images/profile-img.png')} />
            <Text style={styles.userHandle}>@yinka</Text>
          </View>
          <View style={styles.accounts}>
            <HorizontalList data={data.accounts} item={AccountDetail} />
          </View>
          <View style={styles.historySection}>
            <View>
              <Text style={styles.historyHeaderText}>Recent History</Text>
              <VerticalList data={data.history} item={AccountHistory} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {},
  user: {
    marginLeft: 20,
    flexDirection: 'column',
  },
  accounts: {
    marginTop: 38,
    marginLeft: 20,
    flexDirection: 'column',
  },
  contentScrollStyle: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  scrollStyle: {
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    flex: 1,
  },
  userHandle: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 15,
    textAlign: 'left',
    color: '#9B9B9B',
    fontFamily: 'Graphik-Bold',
  },
  historySection: {
    alignSelf: 'stretch',
    padding: 20,
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderWidth: 1.5,
    borderColor: '#EDEDED',
    shadowColor: 'rgba(226, 226, 226, 0.83)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 10,

    elevation: 9,
    marginTop: 16,
  },
  historyHeaderText: {
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 17,
    textAlign: 'left',
    color: '#000000',
    fontFamily: 'Graphik-Bold',
  },
});
