import React from 'react'
import { StyleSheet, Pressable, Text, View } from 'react-native'

const Button = ({text, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#e47911',
        marginVertical: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#a15e1b'

    },
    text: {
        fontSize: 18,

    }
})
