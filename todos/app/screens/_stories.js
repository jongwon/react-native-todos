import React from 'react';

import {storiesOf} from '@storybook/react-native';
import TodoListScreen from './TodoListScreen';

import {withProvider, store} from '../StoreDecorator';
import {addTodo, clear} from '../reducers';

storiesOf('screens/TodoListScreen', module)
  .addDecorator(getStory => {
    store.dispatch(clear());
    store.dispatch(addTodo({title: '할 일1 ', done: false}));
    store.dispatch(addTodo({title: '할 일2 ', done: false}));
    return withProvider(store)(getStory);
  })
  .add('리스트 스크린 ', () => <TodoListScreen />);
