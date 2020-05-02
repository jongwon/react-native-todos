import React from 'react';

import {storiesOf} from '@storybook/react-native';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

storiesOf('components/TodoItem', module)
  .add('TodoItem ', () => <TodoItem />)
  .add('TodoInput', () => <TodoInput />);
