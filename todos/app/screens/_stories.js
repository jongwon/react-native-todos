import React from 'react';

import {storiesOf} from '@storybook/react-native';
import TodoListScreen from './TodoListScreen';

storiesOf('screens/TodoListScreen', module).add('리스트 스크린 ', () => (
  <TodoListScreen />
));
