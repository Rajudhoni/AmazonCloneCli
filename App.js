import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import ProductScreen from './src/screens/ProductScreen'

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
        {/* <HomeScreen /> */}
        <ProductScreen />
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
root: {
  flex: 1, 
  backgroundColor: '#d9d5d4',
  
}
})


