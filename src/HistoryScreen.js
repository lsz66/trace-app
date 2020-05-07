import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {bindBackExitApp, removeBackExitApp} from './components/BackHandler';

export default ({navigation}) => {
  useEffect(() => {
    bindBackExitApp();
    return () => {
      removeBackExitApp();
    };
  });
  return (
    <View>
      <Text>历史</Text>
    </View>
  );
};
