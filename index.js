/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from './src';
import {name as appName} from './app.json';
import {enableScreens} from 'react-native-screens';

enableScreens();

AppRegistry.registerComponent(appName, () => Root);
