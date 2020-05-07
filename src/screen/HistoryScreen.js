import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {bindBackExitApp, removeBackExitApp} from '../utils/BackHandler';
import Dimension from '../utils/Dimension';

const list = [
  {
    name: '脆鱼',
    createTime: '2020-05-03 12:45:13',
  },
  {
    name: '卡蒂鱼',
    createTime: '2030-11-23 12:54:11',
  },
  {
    name: '脆鱼',
    createTime: '2020-05-03 12:45:13',
  },
  {
    name: '卡蒂鱼',
    createTime: '2030-11-23 12:54:11',
  },
  {
    name: '脆鱼',
    createTime: '2020-05-03 12:45:13',
  },
];

export default ({navigation}) => {
  useEffect(() => {
    bindBackExitApp();
    return () => {
      removeBackExitApp();
    };
  }, [navigation]);

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({item}) => (
    <ListItem
      title={`名称: ${item.name}`}
      subtitle={`导入时间: ${item.createTime}`}
      leftAvatar={
        <Image source={require('../asset/aquatic.png')} style={styles.avatar} />
      }
      bottomDivider
      chevron
    />
  );

  return (
    <FlatList keyExtractor={keyExtractor} data={list} renderItem={renderItem} />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: Dimension.width / 10,
    height: Dimension.width / 10,
  },
});
