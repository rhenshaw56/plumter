import React, {useState} from 'react';
import {ImageSourcePropType} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {Dispatch, AnyAction} from 'redux';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Account from './src/screens/Account';
import Cards from './src/screens/Cards';
import Reader from './src/screens/Reader';
import Share from './src/screens/Share';
import Icon from './src/components/Icon';
import NotificationBell from './src/components/NotificationBell';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootState} from './src/redux/reducers';

import * as app from './src/redux/actions/appActions';

import {store} from './src/redux/store';

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

const TABS_WITH_NO_BELL = ['Cards'];

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<StackParamList>();

const AccountTabs = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const [activeTab, setTab] = useState<TabScreenType>('Home');

  const setActiveTab = (activeTab: TabScreenType): void => {
    setTab(activeTab);
    dispatch(app.setActiveTab(activeTab));
  };
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

const Navigator = () => {
  const {
    user: {isLoggedIn},
    app: {activeTab},
  } = useSelector((state: RootState) => state);

  const hideHeaderBar = TABS_WITH_NO_BELL.includes(activeTab);

  if (isLoggedIn) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Account"
          component={AccountTabs}
          options={{
            title: '',
            headerBackVisible: false,
            headerRight: () => <NotificationBell hidden={hideHeaderBar} />,
            headerShadowVisible: false,
            headerStyle: {
              ...(hideHeaderBar && {
                width: 0,
                height: 0,
                display: 'none',
                backgroundColor: '#f4F9ff',
              }),
            },
          }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShadowVisible: false, title: ''}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
