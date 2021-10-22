import React, {useState} from 'react';
import {ImageSourcePropType} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Account from './src/screens/Account';
import Cards from './src/screens/Cards';
import Reader from './src/screens/Reader';
import Share from './src/screens/Share';
import Icon from './src/components/Icon';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StackParamList, GenericObject, TabScreenType} from './types';

const ACTIVE_ASSETS: GenericObject<ImageSourcePropType> = {
  Home: require('./src/assets/icons/layer_active.png'),
  Cards: require('./src/assets/icons/card_active.png'),
  Share: require('./src/assets/icons/share_active.png'),
  Reader: require('./src/assets/icons/reader_active.png'),
};

const INACTIVE_ASSETS: GenericObject<ImageSourcePropType> = {
  Home: require('./src/assets/icons/layer.png'),
  Cards: require('./src/assets/icons/card.png'),
  Share: require('./src/assets/icons/share.png'),
  Reader: require('./src/assets/icons/reader.png'),
};

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<StackParamList>();

const AccountTabs = () => {
  const [activeTab, setActiveTab] = useState<TabScreenType>('Home');
  console.log('active', activeTab);
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 60,
          borderTopColor: '#fff',
          elevation: 0,
        },
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabel: () => null,
        tabBarIcon: ({}) => {
          const icon: ImageSourcePropType =
            route.name === activeTab
              ? ACTIVE_ASSETS[route.name]
              : INACTIVE_ASSETS[route.name];

          return <Icon asset={icon} />;
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home">
        {renderProps => (
          <Account {...renderProps} index={0} setActiveTab={setActiveTab} />
        )}
      </Tab.Screen>
      <Tab.Screen name="Cards">
        {renderProps => (
          <Cards {...renderProps} index={1} setActiveTab={setActiveTab} />
        )}
      </Tab.Screen>
      <Tab.Screen name="Share">
        {renderProps => (
          <Share {...renderProps} index={2} setActiveTab={setActiveTab} />
        )}
      </Tab.Screen>
      <Tab.Screen name="Reader">
        {renderProps => (
          <Reader {...renderProps} index={3} setActiveTab={setActiveTab} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShadowVisible: false, title: ''}}
        />
        <Stack.Screen
          name="Account"
          component={AccountTabs}
          options={{
            title: '',
            headerBackVisible: false,
            headerRight: () => (
              <Icon asset={require('./src/assets/icons/bell.png')} />
            ),
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
