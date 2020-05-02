import React from 'react';

import {storiesOf} from '@storybook/react-native';
import TodoStackScreen from './TodoStackScreen';
import {NavigationContainer} from '@react-navigation/native';

storiesOf('routers/TodoStackScreen', module)
  .addDecorator(getStory => (
    <NavigationContainer>{getStory()}</NavigationContainer>
  ))
  .add('TodoStackScreen ', () => <TodoStackScreen />);
