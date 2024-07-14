import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home';
import Login from '../screens/Login';
import { Text, View } from 'react-native';

const Navigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{animation: 'default'}}>
            <Stack.Screen name='Home' component={Home} options={{
                // headerShown: false
                // header: () => <View><Text>My Header</Text></View>
            }} />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}

export default Navigation;