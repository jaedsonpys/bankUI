import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/header/Header'
import Balance from './src/components/balance/Balance';
import Main from './src/components/main/Main';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Balance/>
      <Main/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 75,
    paddingBottom: 75,
    
    backgroundColor: '#29db88'
  },
});
