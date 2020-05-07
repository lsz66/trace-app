import React, {useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text} from 'react-native';
import {Button, Icon, Input} from 'react-native-elements';

export default ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <Image
        source={require('./static/logo.png')}
        style={styles.img}
        borderRadius={20}
      />
      <Text style={styles.text}>水产溯源信息导入系统</Text>
      <Input
        label="用户名"
        containerStyle={styles.input}
        placeholder="请输入用户名"
        leftIcon={<Icon name="person"/>}
        onChangeText={setUsername}
      />
      <Input
        label="密码"
        containerStyle={styles.input}
        placeholder="请输入密码"
        leftIcon={<Icon name="https"/>}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Button
        title="登录"
        buttonStyle={styles.btn}
        onPress={() => {
          console.log(username, password);
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        }}
      />
    </ScrollView>
  );
};

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  input: {
    marginVertical: 10,
  },
  btn: {
    margin: 15,
  },
  img: {
    marginVertical: 10,
    width: width - 150,
    height: width - 150,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
