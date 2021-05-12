import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, LogBox   } from 'react-native'

import ProductItem from '../../components/ProductItem';
import { DataStore } from 'aws-amplify';
import {Product} from '../../models';

// import products from '../../data/products';


const HomeScreen = ({searchValue}) => {

        //console.log("Search Value", searchValue);
        const [products, setProducts] = useState([]);
        console.log(products);

        useEffect(()=> {
            //this comment for short form Method-1 to set Products 
            DataStore.query(Product).then(setProducts)

            //this comment for Method -2 to set Products 

            // const fetchProducts = async () => {
            //     const results = await DataStore.query(Product);
            //     setProducts(results)
            // }
            
            // fetchProducts();
        }, [])
        // LogBox.ignoreLogs(['Setting a timer']);
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
