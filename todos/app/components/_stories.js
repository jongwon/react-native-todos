import React from 'react';

import {storiesOf} from '@storybook/react-native';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

import {withProvider, store} from '../StoreDecorator';
import {changeMode, editTodo, cancelEdit} from '../reducers';

storiesOf('components/TodoInput-빈입력', module)
  .addDecorator(getStory => {
    store.dispatch(cancelEdit());
    return withProvider(store)(getStory);
  })
  .add('입력 상태', () => <TodoInput />);

storiesOf('components/TodoInput-수정모드', module)
  .addDecorator(getStory => {
    store.dispatch(editTodo({id: '1', title: '수정할 할일', done: false}));
    return withProvider(store)(getStory);
  })
  .add('수정 상태', () => <TodoInput />);

storiesOf('components/TodoItem - view', module)
  .addDecorator(getStory => {
    store.dispatch(changeMode('view'));
    return withProvider(store)(getStory);
  })
  .add('view - 진행상태 ', () => (
    <TodoItem
      todo={{
        title: '아직 진행 중인 일',
        done: false,
      }}
    />
  ))
  .add('view - 진행상태 -긴문장 ', () => (
    <TodoItem
      todo={{
        title:
          '진행 중인 작업에 대한 내용을 긴 문장으로 기술할때 어떻게 보이는지 확인해야 함. 진행 중인 작업에 대한 내용을 긴 문장으로 기술할때 어떻게 보이는지 확인해야 함',
        done: false,
      }}
    />
  ))
  .add('view - 완료상태 ', () => (
    <TodoItem
      todo={{
        title: '완료된 작업',
        done: true,
      }}
    />
  ))
  .add('view - 완료상태 -긴문장 ', () => (
    <TodoItem
      todo={{
        title:
          '진행 중인 작업에 대한 내용을 긴 문장으로 기술할때 어떻게 보이는지 확인해야 함. 진행 중인 작업에 대한 내용을 긴 문장으로 기술할때 어떻게 보이는지 확인해야 함',
        done: true,
      }}
    />
  ));

storiesOf('components/TodoItem - edit', module)
  .addDecorator(getStory => {
    store.dispatch(changeMode('edit'));
    return withProvider(store)(getStory);
  })
  .add('edit - 진행상태 ', () => (
    <TodoItem
      todo={{
        title: '아직 진행 중인 일',
        done: false,
      }}
    />
  ))
  .add('edit - 진행상태 -긴문장 ', () => (
    <TodoItem
      todo={{
        title:
          '진행 중인 작업에 대한 내용을 긴 문장으로 기술할때 어떻게 보이는지 확인해야 함. 진행 중인 작업에 대한 내용을 긴 문장으로 기술할때 어떻게 보이는지 확인해야 함',
        done: false,
      }}
    />
  ))
  .add('edit - 완료상태 ', () => (
    <TodoItem
      todo={{
        title: '완료된 작업',
        done: true,
      }}
    />
  ))
  .add('edit - 완료상태 -긴문장 ', () => (
    <TodoItem
      todo={{
        title:
          '진행 중인 작업에 대한 내용을 긴 문장으로 기술할때 어떻게 보이는지 확인해야 함. 진행 중인 작업에 대한 내용을 긴 문장으로 기술할때 어떻게 보이는지 확인해야 함',
        done: true,
      }}
    />
  ));
