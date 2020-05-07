import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';
import LoginScreen from './src/screen/LoginScreen';
import HomeScreen from './src/screen/HomeScreen';
import FormScreen from './src/screen/Form';
import HistoryScreen from './src/screen/HistoryScreen';
import ResultScreen from './src/screen/Form/ResultScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabs = () => (
  <Tab.Navigator backBehavior="none">
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: '信息导入',
        tabBarIcon: ({color}) => <Icon name="launch" color={color} />,
      }}
    />
    <Tab.Screen
      name="History"
      component={HistoryScreen}
      options={{
        title: '历史记录',
        tabBarIcon: ({color}) => <Icon name="reorder" color={color} />,
      }}
    />
  </Tab.Navigator>
);

const AppMain = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeTabs}
      options={{title: '水产信息溯源'}}
    />
    <Stack.Screen
      name="Form"
      component={FormScreen}
      options={{title: '导入信息'}}
    />
    <Stack.Screen
      name="Result"
      component={ResultScreen}
      options={{title: '提交'}}
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
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
