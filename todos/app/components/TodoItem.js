import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

Icon.loadFont();

const TodoItem = ({todo}) => {
  return (
    <TouchableOpacity>
      <View style={styles.todoItem}>
        <Text
          style={{
            ...styles.todoTitle,
            ...(todo.done ? styles.todoDoneTitle : {}),
          }}>
          {todo.title}
        </Text>
        <Icon
          name="check"
          style={{
            ...styles.todoIcon,
            ...(todo.done ? styles.todoDonIcon : {}),
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
  todoTitle: {
    flex: 1,
    fontSize: 20,
    marginRight: 15,
  },
  todoDoneTitle: {
    color: '#999',
    textDecorationLine: 'line-through',
  },
  todoIcon: {
    fontSize: 24,
    marginRight: 5,
  },
  todoDonIcon: {
    color: '#339933',
  },
});

TodoItem.defaultProps = {
  todo: {
    title: '',
    done: false,
  },
};

export default TodoItem;
