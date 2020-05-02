import React from 'react';

import {storiesOf} from '@storybook/react-native';
import TodoStackScreen from './TodoStackScreen';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers';

const store = createStore(reducers);

storiesOf('routers/TodoStackScreen', module)
  .addDecorator(getStory => (
    <Provider store={store}>
      <NavigationContainer>{getStory()}</NavigationContainer>
    </Provider>
  ))
  .add('TodoStackScreen ', () => <TodoStackScreen />);
