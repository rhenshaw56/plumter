import React, {ReactElement, useEffect, useRef} from 'react';
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
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {StackParamList, InitialParams} from '../../../types';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'Share'
>;
interface ICardsProps {
  navigation: LoginScreenNavigationProp;
  index: number;
  setActiveTab: InitialParams['setActiveTab'];
}

const Share = (props: ICardsProps): ReactElement => {
  const {navigation, setActiveTab, index} = props;
  const currentIndex = navigation.getState().index;

  useEffect(() => {
    if (currentIndex === index) {
      setActiveTab('Share');
    }
  }, [currentIndex, index, setActiveTab]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollStyle}>
        <View style={styles.container} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Share;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollStyle: {
    // flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ffffff',
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
