import React, {useEffect} from 'react';
import {Text, View, Alert, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {useForm} from 'react-hook-form';
import Field from './components/Field';
import theme from '../../style/theme';
import {bindBackExitApp, removeBackExitApp} from '../../utils/BackHandler';
import CreateForm from '../../utils/CreateForm';

export default ({navigation, route}) => {
  const {control, handleSubmit, errors} = useForm();

  const id = route.params.id;
  const onSubmit = data => {
    data.id = id;
    navigation.reset({
      index: 0,
      routes: [{name: 'Result'}],
    });
    Alert.alert('Form Data', JSON.stringify(data));
  };

  useEffect(() => {
    removeBackExitApp();
    return () => {
      bindBackExitApp();
    };
  }, [navigation]);

  return (
    <View>
      <Text style={styles.text}>识别到RFID：</Text>
      <Text style={styles.text}>{id}</Text>

      {CreateForm('销售员').map((item, index) => (
        <Field
          key={index}
          field={item.field}
          label={item.label}
          control={control}
          errors={errors}
        />
      ))}

      <Button
        title="提交"
        onPress={handleSubmit(onSubmit)}
        containerStyle={theme.btn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 15,
    marginVertical: 8,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
