import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import product from '../../data/product';

import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import  {useRoute} from '@react-navigation/native';


const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);

    const Route = useRoute();
    console.log("Route Param Value: ", Route.params.id)

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
                    
                    <Button 
                        containerStyles={{backgroundColor: '#e3c985'}}
                        text={'Add To Cart'} 
                        onPress={() => {console.warn('Add to cart')}}
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
