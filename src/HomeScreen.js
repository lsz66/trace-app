import React, {useEffect} from 'react';
import {NativeModules, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
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
      <Text>主页</Text>
      <Button title="导入数据" onPress={() => scan()} />
    </View>
  );
};

async function scan() {
  const id = await NativeModules.Scanner.scan();
  console.log(id);
}
