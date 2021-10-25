import React, {ReactElement, useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  Platform,
} from 'react-native';
import {ModalView, UIModalPresentationStyles} from 'react-native-ios-modal';

import {RootState} from '../../redux/reducers';
import Avatar from '../../components/Avatar';
import {HorizontalList, VerticalList} from '../../components/List';
import {InitialParams, NavigationProp} from '../../../types';
import AccountDetail from './accountDetail';
import AccountHistory from './accountHistory';
import ProfileModal from './profileModal';
import {getUserThumbnailUrl} from '../../utils';

import data from './mock.json';

interface IProps {
  navigation: NavigationProp<'Reader'>;
  index: number;
  setActiveTab: InitialParams['setActiveTab'];
}

const Account = (props: IProps): ReactElement => {
  const {currentUser} = useSelector((state: RootState) => state.user);
  const {navigation, setActiveTab, index} = props;
  const currentIndex = navigation.getState().index;

  const imageUrl = getUserThumbnailUrl(currentUser.id);

  const iosModalRef = useRef(null);
  const [androidModalVisibility, setAndroidModalVisibility] =
    useState<boolean>(false);

  useEffect(() => {
    if (currentIndex === index) {
      setActiveTab('Home');
    }
  }, [currentIndex, index, setActiveTab]);

  const closeModal = () => {
    if (Platform.OS === 'ios' && iosModalRef.current) {
      iosModalRef.current.setVisibility(false);
    }
    if (Platform.OS === 'android') {
      setAndroidModalVisibility(false);
    }
  };

  const showModal = () => {
    if (Platform.OS === 'ios' && iosModalRef.current) {
      iosModalRef.current.setVisibility(true);
    }
    if (Platform.OS === 'android') {
      setAndroidModalVisibility(true);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.scrollStyle}
          contentContainerStyle={styles.scrollStyle}>
          <View style={styles.container}>
            <View style={styles.user}>
              <Avatar asset={imageUrl} onPress={showModal} />
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
      {Platform.OS === 'ios' && (
        <ModalView
          containerStyle={styles.modalContainer}
          enableSwipeGesture={false}
          setEnableSwipeGestureFromProps={true}
          isModalBGTransparent={true}
          isModalBGBlurred={false}
          modalPresentationStyle={UIModalPresentationStyles.pageSheet}
          ref={r => (iosModalRef.current = r)}>
          <ProfileModal imgSrc={imageUrl} onClose={closeModal} />
        </ModalView>
      )}
      {Platform.OS === 'android' && (
        <Modal
          visible={androidModalVisibility}
          hardwareAccelerated={true}
          statusBarTranslucent={true}
          animationType="slide">
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.modalContainer}>
              <ProfileModal imgSrc={imageUrl} onClose={closeModal} />
            </View>
          </SafeAreaView>
        </Modal>
      )}
    </>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f4f9ff',
    padding: 20,
    borderRadius: 30,
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
