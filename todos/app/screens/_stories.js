import React from 'react';

import {storiesOf} from '@storybook/react-native';
import TodoListScreen from './TodoListScreen';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers';

const store = createStore(reducers);

const list = [
  {
    id: '1',
    title: '할일1',
    done: false,
  },
  {
    id: '1',
    title: '할일2',
    done: true,
  },
];

storiesOf('screens/TodoListScreen', module)
  .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
  .add('리스트 스크린 ', () => <TodoListScreen todos={list} />);
