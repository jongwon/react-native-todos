import React from 'react';

import {storiesOf} from '@storybook/react-native';
import TodoStackScreen from './TodoStackScreen';

import {withProvider, store, withNavigationContainer} from '../StoreDecorator';
import {clear} from '../reducers';

storiesOf('routers/TodoStackScreen', module)
  .addDecorator(getStory => {
    store.dispatch(clear());
    return withProvider(store)(getStory);
  })
  .addDecorator(withNavigationContainer)
  .add('TodoStackScreen ', () => <TodoStackScreen />);
