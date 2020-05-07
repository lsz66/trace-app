import AsyncStorage from '@react-native-community/async-storage';

const set = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

const get = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    // error reading value
  }
};

export default {get, set};
