import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Button from '../../components/Button';
import {Auth } from 'aws-amplify';


const MenuScreen = () => {
    const OnLogout = () => {
        Auth.signOut();
    }
    return (
        <SafeAreaView>
            <Button text="Sign Out" onPress={OnLogout} />
        </SafeAreaView>
    )
}

export default MenuScreen;
