import React, {ReactElement, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  StatusBar,
  View,
} from 'react-native';

import {InitialParams, NavigationProp} from '../../../types';
import Icon from '../../components/Icon';
import CardCta from '../../components/Button/cardCta';

interface IProps {
  navigation: NavigationProp<'Reader'>;
  index: number;
  setActiveTab: InitialParams['setActiveTab'];
}

const Cards = (props: IProps): ReactElement => {
  const {navigation, setActiveTab, index} = props;
  const currentIndex = navigation.getState().index;

  useEffect(() => {
    if (currentIndex === index) {
      setActiveTab('Cards');
    }
  }, [currentIndex, index, setActiveTab]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollStyle}>
        <View style={styles.cardSection}>
          <Text style={styles.cardBalance}>$200.56</Text>
          <View style={styles.cardDesc}>
            <Text style={styles.activeText}>Active</Text>
            <Text style={styles.cardType}> ~ Virtual Dollar card</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.virtualCard}
              source={require('../../assets/images/virtual-card.png')}
            />
          </View>
          <View style={styles.cardActions}>
            <CardCta
              text="Show card"
              icon={require('../../assets/icons/eye.png')}
            />
            <CardCta text="Fund card" iconText="+" />
            <CardCta
              text="Freeze"
              icon={require('../../assets/icons/freeze.png')}
            />
          </View>
          <Text />
        </View>
        <View style={styles.cardActivity}>
          <Text style={styles.cardActivityHeader}>
            Card activity for June 2020
          </Text>
          <View style={styles.activityFilter}>
            <Text>Select Month</Text>
            <Text>Search</Text>
            <Text>Download</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cards;
const dimensions = Dimensions.get('screen');
const screenHeight = dimensions.height;
const screenWidth = dimensions.width;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollStyle: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ffffff',
  },
  cardSection: {
    flex: 1,
    height: screenHeight * 0.5,
    backgroundColor: '#f4F9ff',
    borderBottomWidth: 1.2,
    borderBottomRadius: 8,
    borderBottomColor: '#e3F0ff',
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  cardBalance: {
    fontSize: 31,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 34,
    textAlign: 'left',
    color: '#000000',
    fontFamily: 'Graphik-Bold',
  },
  cardDesc: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 20,
    textAlign: 'left',
    fontFamily: 'Graphik-Bold',
    flexDirection: 'row',
  },
  activeText: {
    color: '#65b634',
  },
  cardType: {
    color: '#9b9b9b',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    marginTop: 41,
  },
  virtualCard: {
    width: 320,
    height: 211,
  },
  cardActions: {
    flexDirection: 'row',
    marginTop: 22,
    alignItems: 'center',
  },
  cardActivity: {
    flex: 1,
    height: 'stretch',
  },
  activityFilter: {},
  cardActivityHeader: {},
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
