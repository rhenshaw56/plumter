import React, {ReactElement, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
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
        style={styles.scrollStyle}
        contentContainerStyle={styles.contentScrollStyle}>
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
            <TextInput
              style={styles.monthFilter}
              placeholder="Select month"
              placeholderTextColor="#9b9b9b"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={{...styles.activityButton, ...styles.spacer}}>
              <View style={styles.activityIcon}>
                <Icon
                  style={styles.activityBtnIcons}
                  asset={require('../../assets/icons/search.png')}
                />
              </View>
              <Text style={styles.activityButtonTextStyle}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.activityButton}>
              <View>
                <Icon
                  style={styles.activityBtnIcons}
                  asset={require('../../assets/icons/download.png')}
                />
              </View>
              <Text style={styles.activityButtonTextStyle}>Download</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cards;
const dimensions = Dimensions.get('screen');
const screenHeight = dimensions.height;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollStyle: {
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
  },
  contentScrollStyle: {
    justifyContent: 'center',
    alignContent: 'center',
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
    marginTop: 67,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'space-evenly',
  },
  activityFilter: {
    flexDirection: 'row',
    marginTop: 21,
    alignItems: 'center',
  },
  cardActivityHeader: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 15,
    textAlign: 'left',
    color: '#9B9B9B',
    fontFamily: 'Graphik-Bold',
  },
  monthFilter: {
    fontSize: 11,
    lineHeight: 12,
    fontFamily: 'Graphik-Regular',
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#dadae8',
    width: 135,
    height: 38,
    justifyContent: 'center',
    marginRight: 10,
  },
  activityButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#3581f3',
    borderColor: '#dadae8',
    borderRadius: 6,
    borderWidth: 1,
    height: 37,
    width: 90,
    alignContent: 'center',
    alignItems: 'center',
  },
  activityButtonTextStyle: {
    color: '#ffffff',
    fontFamily: 'Graphik-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 11,
    lineHeight: 12,
    textAlign: 'center',
    justifyContent: 'center',
  },
  spacer: {
    marginRight: 4,
  },
  activityBtnIcons: {
    width: 18,
    height: 18,
    margin: 0,
    marginRight: 3,
  },
  activityIcon: {
    justifyContent: 'center',
    lineHeight: 13,
    fontSize: 10,
  },
});
