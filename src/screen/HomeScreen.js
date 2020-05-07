import React, {useEffect, useState} from 'react';
import {
  Image,
  NativeModules,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {Card} from 'react-native-elements';
import {bindBackExitApp, removeBackExitApp} from '../utils/BackHandler';
import theme from '../style/theme';
import Dimension from '../utils/Dimension';

const mock = {
  name: '憨憨',
  position: '销售员',
  count: 5,
};

export default ({navigation}) => {
  const [user, setUser] = useState({name: '', position: '', count: 0});

  useEffect(() => {
    bindBackExitApp();
    setUser(mock);
    return () => {
      removeBackExitApp();
    };
  }, [navigation]);

  const {name, position, count} = user;

  return (
    <ScrollView>
      <Card title="个人信息">
        <View style={theme.row}>
          <Text style={theme.label}>姓名：</Text>
          <Text style={theme.value}>{name}</Text>
        </View>
        <View style={theme.row}>
          <Text style={theme.label}>职位：</Text>
          <Text style={theme.value}>{position}</Text>
        </View>
        <View style={theme.row}>
          <Text style={theme.label}>已添加：</Text>
          <Text style={theme.value}>{count}</Text>
        </View>
      </Card>
      <TouchableOpacity
        style={styles.scanBtn}
        onPress={async () => {
          const id = await NativeModules.Scanner.scan();
          navigation.push('Form', {id});
        }}>
        <Image source={require('../asset/scan.png')} style={styles.scanIcon} />
        <Text style={styles.scanText}>导入{position.substring(0, 2)}数据</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scanBtn: {
    alignItems: 'center',
    marginVertical: 30,
  },
  scanText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  scanIcon: {
    width: Dimension.width / 3,
    height: Dimension.width / 3,
  },
});
