import React from 'react';

import {storiesOf} from '@storybook/react-native';
import TodoListScreen from './TodoListScreen';

storiesOf('screens/TodoListScreen', module).add('TodoItem ', () => (
  <TodoListScreen />
));
