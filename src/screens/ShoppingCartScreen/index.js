import React from 'react'
import { View, Text, StyleSheet, FlatList  } from 'react-native';
import {useNavigation } from '@react-navigation/native';

import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';

import products from '../../data/cart';


const ShoppingCartScreen = () => {
   const Navigation = useNavigation();

    const totalPrice = products.reduce(
        (summedPrice, product) => summedPrice + product.item.price * product.quantity, 0,
    );

    const onCheckout = () => {
        console.warn("Proceed to Checkout");
        Navigation.navigate("Address")
      };
    
    return (
        <View style={styles.page}>
           {/* Render Product component */}
               

                    <FlatList 
                        data={products}
                        renderItem={({item}) => <CartProductItem cartItem={item} />}
                        keyExtractor={({ id }) => id}
                        showsVerticalScrollIndicator={false}

                        ListHeaderComponent={() => (
                            <View>
                              <Text style={{fontSize: 18}}>
                                Subtotal ({products.length} items):{' '}
                                <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                                  ${totalPrice.toFixed(2)}
                                </Text>
                              </Text>
                              <Button
                                text="Proceed to checkout"
                                onPress={onCheckout}
                                containerStyles={{
                                  backgroundColor: '#f7e300',
                                  borderColor: '#c7b702',
                                }}
                              />
                            </View>
                          )}
                    />


           {/* Render Product component */}
        </View>
    )
}


export default ShoppingCartScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
    },
   
})
