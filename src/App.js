/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native'
import Router from './router'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='#f1f3f6'/>
      <Router/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
 
});

export default App;
