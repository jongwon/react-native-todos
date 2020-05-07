import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  useSelector,
  useDispatch,
  editTodo,
  removeTodo,
  toggleDone,
} from '../reducers';

const TodoItem = ({todo}) => {
  const mode = useSelector(store => store.todos.mode);
  const dispatch = useDispatch();

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
        {mode === 'view' && (
          <TouchableOpacity onPress={() => dispatch(toggleDone(todo.id))}>
            <Icon
              name="check"
              style={{
                ...styles.todoIcon,
                ...(todo.done ? styles.todoDonIcon : {}),
              }}
            />
          </TouchableOpacity>
        )}
        {mode === 'edit' && (
          <>
            <TouchableOpacity onPress={() => dispatch(editTodo(todo))}>
              <Icon
                name="pencil"
                style={{
                  ...styles.todoIcon,
                  ...(todo.done ? styles.todoDonIcon : {}),
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(removeTodo(todo.id))}>
              <Icon
                name="close"
                style={{
                  ...styles.todoIcon,
                  ...(todo.done ? styles.todoDonIcon : {}),
                }}
              />
            </TouchableOpacity>
          </>
        )}
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
    marginRight: 15,
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
