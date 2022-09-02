//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Local File Imports
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

// create a component
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Root" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

//make this component available to the app
export default MainNavigator;
