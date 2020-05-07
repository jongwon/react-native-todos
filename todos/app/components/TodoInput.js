import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {useSelector, useDispatch, editDone, addTodo} from '../reducers';

const TodoInput = () => {
  const [value, setValue] = useState('');
  const targetTodo = useSelector(store => store.todos.targetTodo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (targetTodo) {
      setValue(targetTodo.title);
    }
  }, [targetTodo]);

  const onSubmit = () => {
    if (targetTodo) {
      dispatch(
        editDone({
          ...targetTodo,
          title: value,
        }),
      );
    } else {
      dispatch(
        addTodo({
          title: value,
          done: false,
        }),
      );
    }
    setValue('');
  };
  return (
    <View style={styles.container}>
      <Input
        value={value}
        onChangeText={text => setValue(text)}
        onSubmitEditing={onSubmit}
        placeholder="할일을 입력해 주세요..."
        rightIcon={{type: 'font-awesome', name: 'chevron-right'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TodoInput;
