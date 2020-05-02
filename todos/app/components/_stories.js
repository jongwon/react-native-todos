import React from 'react';

import {storiesOf} from '@storybook/react-native';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

storiesOf('components/TodoItem', module)
  .add('TodoItem - 진행상태 ', () => (
    <TodoItem
      todo={{
        title: '아직 진행 중인 일',
        done: false,
      }}
    />
  ))
  .add('TodoItem - 진행상태 -긴문장 ', () => (
    <TodoItem
      todo={{
        title:
          '진행 중인 작업에 대한 내용을 긴 문장으로 기술할때 어떻게 보이는지 확인해야 함. 진행 중인 작업에 대한 내용을 긴 문장으로 기술할때 어떻게 보이는지 확인해야 함',
        done: false,
      }}
    />
  ))
  .add('TodoItem - 완료상태 ', () => (
    <TodoItem
      todo={{
        title: '완료된 작업',
        done: true,
      }}
    />
  ))
  .add('TodoItem - 완료상태 -긴문장 ', () => (
    <TodoItem
      todo={{
        title:
          '진행 중인 작업에 대한 내용을 긴 문장으로 기술할때 어떻게 보이는지 확인해야 함. 진행 중인 작업에 대한 내용을 긴 문장으로 기술할때 어떻게 보이는지 확인해야 함',
        done: true,
      }}
    />
  ))
  .add('TodoInput', () => <TodoInput />);
