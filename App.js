import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/index';
import { Provider } from 'react-redux';
import Header from './src/components/Header';
import CryptoContainer from './src/components/CryptoContainer'
import CryptoCoin from './src/components/CryptoCoin'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}

