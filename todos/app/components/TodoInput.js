import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

FontAwesome.loadFont();

const TodoInput = () => {
  const [value, setValue] = useState('aa');

  const onSubmit = () => {
    console.log(value);
    setValue('');
  };
  return (
    <View style={styles.container}>
      <Input
        value={value}
        onChangeText={text => setValue(text)}
        onSubmitEditing={onSubmit}
        rightIcon={{type: 'font-awesome', name: 'chevron-right'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TodoInput;
