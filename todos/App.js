import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import TodoStackScreen from './app/routers/TodoStackScreen';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './app/reducers';

SimpleLineIcons.loadFont();
FontAwesome.loadFont();

const useStylebook = false;
const store = createStore(reducers);

let App = null;
if (useStylebook) {
  App = require('./storybook').default;
} else {
  App = () => {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{flex: 1}}>
            <TodoStackScreen />
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    );
  };
}
const styles = StyleSheet.create({});

export default App;
