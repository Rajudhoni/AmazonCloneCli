import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import product from '../../data/product';

import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';


const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);

    return (
        <View style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>


            {/* Image carousel */}

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
            <Text style={styles.price}>from ${product.price}
                {product.oldPrice && (
                        <Text style={styles.oldPrice}>  ${product.oldPrice}</Text>
                        
                )}
            </Text>

            {/* Description */}
                    <Text style={styles.description}>
                        {product.description}
                    </Text>
            {/* Quantity  selector */}
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            {/* Button */}
                    
                    <Button text={'Add To Cart'} onPress={() => {console.warn('Add to cart')}} />
                    <Button text={'Buy Now'} onPress={() => {console.warn('Buy Now')}} />



        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    root:{
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
