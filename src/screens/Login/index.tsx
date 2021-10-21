import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import SplashScreen from 'react-native-splash-screen';

import {wait} from '../../utils';
import Face from '../../assets/icons/face.svg';

interface LoginProps {
  componentId: string;
}

class Login extends React.Component {
  constructor(props: LoginProps) {
    super(props);

    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    wait(2000).then(() => SplashScreen.hide());
  }

  // pushViewPostScreen = () => {
  //   Navigation.push(this.props.componentId, {
  //     component: {
  //       name: 'blog.ViewPost',
  //       passProps: {
  //         somePropsToPass: 'hello',
  //       },
  //       options: {
  //         topBar: {
  //           title: {
  //             text: 'Post1',
  //           },
  //         },
  //       },
  //     },
  //   });
  // };

  handleSubmitPress = () => {};

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
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
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                placeholder="Your email"
                placeholderTextColor="#9b9b9b"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                placeholder="Your password"
                placeholderTextColor="#9b9b9b"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={this.handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Log in</Text>
            </TouchableOpacity>
            <Text style={styles.linkText}>Forgot password?</Text>
            <Text style={styles.linkText}>Create account</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollStyle: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
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
