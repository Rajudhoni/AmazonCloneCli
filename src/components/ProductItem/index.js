import React from 'react'
import { View, Text, StyleSheet, Image, Pressable} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductItem = ({item}) => {
    const Navigation = useNavigation();


    const onPress = () => {
        console.warn("Item Pressed");
        Navigation.navigate("ProductDetail", {id: item.id});
    }
    return (
        <Pressable onPress={onPress} style={styles.root}>
        <Image style={styles.image} source={{ uri: item.image}}  />
        <View style={styles.rightContainer}>
            <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
            {/* Ratings */}
            <View style={styles.ratingContainer}>
             {  [0,0,0,0,0].map((el, i)=>
                    <FontAwesome
                        key={i}
                        style={styles.star} 
                        name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'} 
                        size={18} 
                        color="#e47911" 
                        
                    />
                )
            }
   
            <Text>{item.ratings}</Text>
            </View>
            <Text style={styles.price}>from ${item.price.toFixed(2)}
                {item.oldPrice && (
                        <Text style={styles.oldPrice}>  ${item.oldPrice.toFixed(2)}</Text>
                        
                )}
            </Text>
        </View>
    </Pressable>
    )
}

export default ProductItem;

const styles = StyleSheet.create({
    root:{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d1d1d1', 
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
        
    }, 
    image: {
        
        height: 150,
        flex: 0.4,
        resizeMode: 'contain'
        
        
    }, 
    rightContainer: {
        padding: 10, 
        flex: 0.6
       
    }, 
    star: {
        margin: 2
    },
    title: {
        fontSize: 18,
      

       
    }, 
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginVertical: 10, 
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    }, 
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    }

})
