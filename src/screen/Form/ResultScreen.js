import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Button, Card} from 'react-native-elements';
import theme from '../../style/theme';
import Dimension from '../../utils/Dimension';

export default ({navigation}) => (
  <View>
    <Card>
      <Image source={require('../../asset/success.png')} style={styles.img} />
      <Text style={styles.title}>添加成功</Text>
      <Text style={styles.message}>您已成功导入数据</Text>
    </Card>
    <Button
      title="返回首页"
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        })
      }
      containerStyle={theme.btn}
    />
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    alignSelf: 'center',
  },
  message: {
    fontSize: 16,
    marginVertical: 10,
    alignSelf: 'center',
  },
  img: {
    alignSelf: 'center',
    width: Dimension.width / 3,
    height: Dimension.width / 3,
  },
});
