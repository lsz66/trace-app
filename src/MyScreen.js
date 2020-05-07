import React, {useEffect, useState} from 'react';
import {BackHandler, StyleSheet, Text, View} from 'react-native';
import {Button, Card} from 'react-native-elements';
import {bindBackExitApp, removeBackExitApp} from './components/BackHandler';
import {Modal, Provider} from '@ant-design/react-native';

const mock = {
  name: '周杰伦',
  position: '种苗员',
  count: 5,
};

const exitConfirm = () => {
  Modal.alert('确认', '您确定要退出本程序吗？', [
    {
      text: '取消',
      style: 'cancel',
    },
    {text: '确定', onPress: () => BackHandler.exitApp()},
  ]);
};

export default ({navigation}) => {
  const [user, setUser] = useState({name: '', position: '', count: 0});
  useEffect(() => {
    bindBackExitApp();
    setUser(mock);
    return () => {
      removeBackExitApp();
    };
  }, []);

  const {name, position, count} = user;
  return (
    <Provider>
      <Card title="个人信息">
        <View style={styles.row}>
          <Text style={styles.label}>姓名：</Text>
          <Text style={styles.value}>{name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>职位：</Text>
          <Text style={styles.value}>{position}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>已添加：</Text>
          <Text style={styles.value}>{count}</Text>
        </View>
      </Card>
      <Button
        title="退出程序"
        onPress={exitConfirm}
        containerStyle={styles.btn}
      />
    </Provider>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  label: {
    fontSize: 15,
  },
  value: {
    fontSize: 15,
    color: '#52504e',
  },
  btn: {
    margin: 20,
  },
});
