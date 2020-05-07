import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Controller} from 'react-hook-form';
import {Input} from 'react-native-elements';

export default props => (
  <View style={styles.container}>
    <Text style={styles.label}>{props.label}</Text>
    <Controller
      as={Input}
      control={props.control}
      name={props.field}
      onChange={args => args[0].nativeEvent.text}
      rules={{required: true}}
      defaultValue=""
    />
    {props.errors[props.field] && (
      <Text style={[styles.error, styles.label]}>请填写此字段</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  error: {
    color: 'red',
  },
  label: {
    marginLeft: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
});
