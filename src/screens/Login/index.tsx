import React, {ReactElement, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
// import {ActivityIndicator} from 'native-base';
// @ts-ignore
import SplashScreen from 'react-native-splash-screen';

import {wait} from '../../utils';

// @ts-ignore
import Face from '../../assets/icons/face.svg';
import {NavigationProp} from '../../../types';
import * as user from '../../redux/actions/userActions';
import * as utils from '../../utils';
import {RootState} from '../../redux/reducers';

interface IProps {
  navigation: NavigationProp<'Login'>;
}

const Login = (props: IProps): ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loading} = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    wait(2000).then(() => SplashScreen.hide());
  }, []);

  const handleSubmitPress = () => {
    if (email && password) {
      const emailErrors = utils.validateEmail(email);
      const passwordErrors = utils.validatePassword(password);

      if (emailErrors === undefined && passwordErrors === undefined) {
        console.log('DISPATCHED');
        dispatch(
          user.loginUser({
            email,
            password,
          }),
        );
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.scrollStyle}
        contentContainerStyle={styles.scrollStyle}>
        <View style={styles.container}>
          <View style={styles.headerStyle}>
            <Text style={styles.text}>Log in to Plumter</Text>
          </View>
          <View style={styles.faceStyle}>
            <Face height="33" width="33" />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Your email"
              placeholderTextColor="#9b9b9b"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Your password"
              placeholderTextColor="#9b9b9b"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitPress}>
            {loading ? (
              <View style={styles.spinner}>
                <ActivityIndicator size="small" color="#ffffff" />
              </View>
            ) : (
              <Text style={styles.buttonTextStyle}>Log in</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.linkText}>Forgot password?</Text>
          <Text style={styles.linkText}>Create account</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  spinner: {
    justifyContent: 'center',
    paddingVertical: 10,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
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
  text: {
    fontSize: 25,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 27,
    textAlign: 'left',
    margin: 10,
    color: '#000000',
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
  inputStyle: {
    fontSize: 12,
    fontFamily: 'Graphik-Regular',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#dadae8',
    width: 308,
    height: 53,
  },
  buttonTextStyle: {
    color: '#ffffff',
    paddingVertical: 10,
    fontFamily: 'Graphik-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 16,
    textAlign: 'center',
  },
  buttonStyle: {
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#3581f3',
    borderColor: '#dadae8',
    borderRadius: 8,
    borderWidth: 1,
    height: 58,
    marginLeft: 34,
    marginRight: 33,
  },
  linkText: {
    color: '#3581f3',
    textAlign: 'center',
    marginTop: 30,
    textDecorationLine: 'underline',
    fontSize: 12,
    lineHeight: 13,
  },
});
