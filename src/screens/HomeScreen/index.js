import React from 'react'
import { View, Text, StyleSheet, FlatList  } from 'react-native'

import ProductItem from '../../components/ProductItem';

import products from '../../data/products';


const HomeScreen = () => {
    return (
        <View style={styles.page}>
           
           {/* Render Product component */}
               

                    <FlatList 
                        data={products}
                        renderItem={({item})=>  <ProductItem  item={item}/> }
                        keyExtractor={({ id }) => id}
                        showsVerticalScrollIndicator={false}
                    />


           {/* Render Product component */}
        </View>
    )
}


export default HomeScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
    },
   
})
