import React from 'react';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';

export const store = createStore(reducers);

export const withProvider = store => getStory => (
  <Provider store={store}>{getStory()}</Provider>
);

export const withNavigationContainer = getStory => (
  <NavigationContainer>
    <SafeAreaView style={{flex: 1}}>{getStory()}</SafeAreaView>
  </NavigationContainer>
);
