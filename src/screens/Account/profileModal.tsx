import React, {ReactElement} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Avatar from '../../components/Avatar';
import ProfileCta from '../../components/Button/profileCta';

// @ts-ignore
import Share from '../../assets/icons/share.svg';

interface IProps {
  onClose: () => void;
}

const ProfileModal = ({onClose}: IProps): ReactElement => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.scrollStyle}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentScrollStyle}>
        <View style={styles.container}>
          <Text style={styles.closeModalText} onPress={onClose}>
            Close
          </Text>
          <View style={styles.avatar}>
            <Avatar
              size="lg"
              asset={require('../../assets/images/profile-img.png')}
              containerStyle={styles.avatarContainer}
            />
            <Text style={styles.userFullName}>Adeyinka Elujoba</Text>
            <Text style={styles.userHandle}>@yinka</Text>
          </View>
          <View style={styles.referralSection}>
            <Text style={styles.referralHeading}>Refer and earn!</Text>
            <Text style={styles.referralCaption}>
              Refer and earn! Earn $1 when someone signs up with your username
              or referral link. Note that you will both get the $1 after the
              person creates a dollar card or does a Dom transfer or does an
              international transfer.
            </Text>
            <Text style={styles.referralCaption}>
              Note that you will both get the $1 after the person creates a
              dollar card or does a Dom transfer or does an international
              transfer.
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => {}}>
              <View style={styles.buttonContent}>
                <Text style={styles.buttonTextStyle}>
                  Click to refer a friend
                </Text>
              </View>
              <View style={styles.buttonContent}>
                <Share />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.ctaSection}>
            <ProfileCta
              heading="Set or change your PIN"
              caption="A 6-digit code to safeguard your payments"
            />
            <ProfileCta
              heading="Change your password"
              caption="Your password for signing in"
            />
            <ProfileCta
              heading="Complete your KYC"
              caption="Remove restrictions on your account for payments"
            />
            <ProfileCta
              heading="Log out"
              caption="Remove restrictions on your account for payments"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contentScrollStyle: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  scrollStyle: {
    alignSelf: 'stretch',
  },
  closeModalText: {
    textAlign: 'left',
    // margin: 22,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 15,
    color: '#3581f3',
    fontFamily: 'Graphik-Bold',
  },
  userHandle: {
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 15,
    textAlign: 'left',
    color: '#9B9B9B',
    fontFamily: 'Graphik-Bold',
  },
  userFullName: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 13,
    textAlign: 'left',
    color: '#9B9B9B',
    fontFamily: 'Graphik-Bold',
    marginBottom: 5,
  },
  avatarContainer: {},
  avatar: {
    alignItems: 'center',
    margin: 30,
  },
  referralSection: {
    flex: 1,
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
    paddingLeft: 23,
    paddingTop: 23,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignContent: 'center',
  },
  ctaSection: {
    marginTop: 16,
  },
  referralHeading: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 20,
    textAlign: 'left',
    margin: 10,
    color: '#000000',
    fontFamily: 'Graphik-Bold',
  },
  referralCaption: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 15,
    textAlign: 'left',
    margin: 10,
    color: '#9B9B9B',
    fontFamily: 'Graphik-Bold',
  },
  headerStyle: {
    flexDirection: 'row',
    height: 50,
    marginTop: 10,
    marginLeft: 34,
    marginRight: 33,
    margin: 11,
  },
  faceStyle: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    marginLeft: 34,
    marginRight: 33,
    margin: 11,
  },
  sectionStyle: {
    flexDirection: 'row',
    marginLeft: 34,
    marginRight: 33,
    marginBottom: 11,
    backgroundColor: '#f5f5f5',
  },
  buttonTextStyle: {
    color: '#3581f3',
    fontFamily: 'Graphik-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  buttonContent: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    fontSize: 16,
    backgroundColor: '#ffffff',
    borderColor: '#E5e5e5',
    borderRadius: 8,
    borderWidth: 1,
    height: 46,
    width: 280,
    margin: 10,
    marginBottom: 17,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    // lineHeight: 18,
  },
});
