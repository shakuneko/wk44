import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Header from './scr/Header';
import Menu from './scr/Menu';
import Context from './scr/Context';


const App = () => {
  return (
    <View>
        <Header />
        <Context />
        <Menu />
    </View>
  );
}

export default App;