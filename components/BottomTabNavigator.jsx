import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import About from '../screens/About';
import Login from '../screens/Login';

const TopTabNavigator = () => {

    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Signup" component={Signup} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    )
}

export default TopTabNavigator