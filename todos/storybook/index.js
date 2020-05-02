import {AppRegistry} from 'react-native';
import {getStorybookUI, configure} from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
  require('../app/components/_stories');
  require('../app/screens/_stories');
  require('../app/routers/_stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: require('@react-native-community/async-storage').default,
});

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
