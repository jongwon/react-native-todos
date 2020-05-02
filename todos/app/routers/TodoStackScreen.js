import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import TodoListScreen from '../screens/TodoListScreen';

const TodoStack = createStackNavigator();

const TodoStackScreen = () => {
  return (
    <TodoStack.Navigator>
      <TodoStack.Screen name="todolist" component={TodoListScreen} />
    </TodoStack.Navigator>
  );
};

export default TodoStackScreen;
