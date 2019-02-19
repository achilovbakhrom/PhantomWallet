/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import store from './redux/store';
import {Provider} from 'react-redux';
import Switch from './components/switch/Switch'
import TextField from './components/auth/TextField';
import GreenButton from './components/button/GreenButton';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

class MainApp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Switch first='LOG IN' second='SIGN UP'/>
        <TextField placeholder='E-mail'/>
        
        <GreenButton
          style={{
            width: 300,
            height: 45
          }}
          title='DONE >'
        />
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#151927'
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
