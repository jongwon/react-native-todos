import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import TodoListScreen from '../screens/TodoListScreen';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TodoStack = createStackNavigator();

Icon.loadFont();

const TodoStackScreen = () => {
  return (
    <TodoStack.Navigator>
      <TodoStack.Screen
        name="todolist"
        component={TodoListScreen}
        options={{
          headerStyle: {
            backgroundColor: '#2089dc',
          },
          headerTintColor: '#fff',
          title: '내가 할 일',
          headerRight: () => (
            <TouchableOpacity>
              <Icon name="note" style={styles.headerIcon} />
            </TouchableOpacity>
          ),
        }}
      />
    </TodoStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    fontSize: 24,
    color: '#fff',
    marginRight: 10,
  },
});

export default TodoStackScreen;
