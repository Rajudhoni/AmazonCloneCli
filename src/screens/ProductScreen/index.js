import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native'

//import product from '../../data/product';

import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import  {useRoute} from '@react-navigation/native';
import { DataStore, Auth } from 'aws-amplify';
import {Product, CartProduct} from '../../models';


const ProductScreen = () => {
    const [product, setProduct] = useState(undefined);
    const [selectedOption, setSelectedOption] = useState(undefined);
    const [quantity, setQuantity] = useState(1);

    const route = useRoute();
    
    useEffect(()=> {
        if(!route.params?.id){
            return;
        }

        DataStore.query(Product, route.params.id).then(setProduct);
    }, [route.params?.id]);

    useEffect(()=> {
        if(product?.options){
            setSelectedOption(product.options[0])
        }

    }, [product]);

    const onAddToCart = async () => {

        const authUserInfo = await Auth.currentAuthenticatedUser();

        if(!product || !authUserInfo) {
            return;
        }
        
        const newCartProduct = new CartProduct({
            userSub: authUserInfo.attributes.sub,
            quantity,
            option: selectedOption,
            productID: product.id,
          });

          DataStore.save(newCartProduct);

    };

    if(!product){
        return <ActivityIndicator />;
    }

    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>


            {/* Image carousel */}

                <ImageCarousel images={product.images} />

            {/* Option selector */}
            <Picker
            
                selectedValue={selectedOption}
                onValueChange={(itemValue, itemIndex) =>
                setSelectedOption(itemValue)
                }
            >
                
                {
                    product.options.map( option => <Picker.Item label={option} value={option} />)
                }
            </Picker>

            {/* Price */}
            <Text style={styles.price}>from ${product.price.toFixed(2)}
                {product.oldPrice && (
                        <Text style={styles.oldPrice}>  ${product.oldPrice.toFixed(2)}</Text>
                        
                )}
            </Text>

            {/* Description */}
                    <Text style={styles.description}>
                        {product.description}
                    </Text>
            {/* Quantity  selector */}
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            {/* Button */}
                    
                    <Button 
                        containerStyles={{backgroundColor: '#e3c985'}}
                        text={'Add To Cart'} 
                        onPress={onAddToCart}
                     />
                    <Button 
                        text={'Buy Now'} 
                        onPress={() => {console.warn('Buy Now')}} 
                    />



        </ScrollView>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    root:{
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    }, 
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    },



    description: {
        marginVertical: 10,
        lineHeight: 20,
    }
})
