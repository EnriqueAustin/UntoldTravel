//import liraries
import React, { Component } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Local files
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Tab = createBottomTabNavigator();

// create a component
const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Search' component={SearchScreen} />
            <Tab.Screen name='Favorite' component={FavoriteScreen} />
        </Tab.Navigator>
    );
};

//make this component available to the app
export default TabNavigator;
