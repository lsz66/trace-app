import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';
import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';
import FormScreen from './src/FormScreen.js';
import HistoryScreen from './src/HistoryScreen';
import MyScreen from './src/MyScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabs = () => (
  <Tab.Navigator backBehavior="none">
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: '信息导入',
        tabBarIcon: ({color}) => <Icon name="launch" color={color}/>,
      }}
    />
    <Tab.Screen
      name="History"
      component={HistoryScreen}
      options={{
        title: '历史记录',
        tabBarIcon: ({color}) => <Icon name="reorder" color={color}/>,
      }}
    />
    <Tab.Screen
      name="My"
      component={MyScreen}
      options={{
        title: '我的信息',
        tabBarIcon: ({color}) => <Icon name="person" color={color}/>,
      }}
    />
  </Tab.Navigator>
);

const AppMain = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeTabs}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Form"
      component={FormScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: '登录'}}
      />
      <Stack.Screen
        name="Home"
        component={AppMain}
        options={{title: '水产信息溯源'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
