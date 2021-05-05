import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

const HeaderComponent = ({searchValue, setSearchValue}) => {
   


    return(
        <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
            <View
                style={{
                    margin: 10,
                    padding: 5,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
            <Feather name="search" size={20} />
            <TextInput 
                style={{ height: 40, marginLeft: 10}}
                placeholder="Search ..."
                value={searchValue}
                onChangeText={setSearchValue}
                
                
            />
               
            </View>
        </SafeAreaView>
    )
}

const HomeStack = () =>  {
    const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
        screenOptions={{
            header: () => (
                <HeaderComponent 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                
                />
            )
        }}
    
    >
      <Stack.Screen name="HomeScreen" options={{title: 'Home'}}>
                {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen name="ProductDetail" component={ProductScreen} />
    </Stack.Navigator>
    

  );
};

export default HomeStack;