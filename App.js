import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Router from './src/router';


import AddressScreen from './src/screens/AddressScreen';
import HomeScreen from './src/screens/HomeScreen'
import ProductScreen from './src/screens/ProductScreen'
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';

const App = () => {
  return (
    <>

        {/* <HomeScreen /> */}
        {/* <ProductScreen /> */}

        {/* <ShoppingCartScreen /> */}
        {/* <AddressScreen /> */}
        <Router />
        <StatusBar
        
           backgroundColor="#22e3dd"
/>
      </>
      
  )
}

export default App;




