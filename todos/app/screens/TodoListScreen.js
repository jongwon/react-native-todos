import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TodoInput from '../components/TodoInput';
import {FlatList} from 'react-native-gesture-handler';
import TodoItem from '../components/TodoItem';

const list = [];
for (let i = 1; i < 30; i++) {
  list.push({
    id: '' + i,
    title: '할일 ' + i,
    done: false,
  });
}

const TodoListScreen = () => {
  return (
    <View style={styles.todolist}>
      <TodoInput />
      <FlatList
        data={list}
        style={styles.itemlist}
        renderItem={({item, index, seperators}) => (
          <TodoItem key={item.id} todo={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todolist: {
    margin: 10,
    flex: 1,
    flexDirection: 'column',
  },
  itemlist: {
    flex: 1,
  },
});

export default TodoListScreen;
