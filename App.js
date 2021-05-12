import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, } from 'react-native';
import 'react-native-gesture-handler';
import Router from './src/router';

import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native'

import config from './src/aws-exports';
Amplify.configure(config);


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

export default withAuthenticator(App)




