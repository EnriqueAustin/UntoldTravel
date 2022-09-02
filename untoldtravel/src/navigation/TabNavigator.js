//import liraries
import React, { Component } from 'react';
import { Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Local files
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import icons from '../constants/icons';

const Tab = createBottomTabNavigator();

// create a component
const TabNavigator = () => {
    return (
        <Tab.Navigator 
            initialRouteName='Home' 
            screenOptions={{
                headerShown: false, tabBarShowLabel: false
                }}
        >
            <Tab.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image source={icons.Home} resizeMode='cover' />
                        );
                    },
                }}
            />
            <Tab.Screen 
                name='Search' 
                component={SearchScreen} 
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image source={icons.Search} resizeMode='cover' />
                        );
                    },
                }}
            />
            <Tab.Screen 
                name='Favorite' 
                component={FavoriteScreen} 
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image source={icons.Favorite} resizeMode='cover' />
                        );
                    },
                }}
            />

        </Tab.Navigator>
    );
};

//make this component available to the app
export default TabNavigator;
