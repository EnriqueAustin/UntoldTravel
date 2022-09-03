//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Local File Imports
import TabNavigator from './TabNavigator';
import TripDetailsScreen from '../screens/TripDetailsScreen';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

// create a component
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar />
            <Stack.Navigator>
                <Stack.Screen 
                    name="Root" 
                    component={TabNavigator} 
                    options={{
                        headerShown: false,
                        usenativeDriver: true,
                    }}     
                />
                <Stack.Screen 
                    name="TripDetails" 
                    component={TripDetailsScreen} 
                    options={{
                        headerShown: false,
                        usenativeDriver: true,
                        cardStyleInterpolator: ({current: {progress}}) => ({
                            cardStyle: {
                                opacity: progress,
                            }
                        })
                    }}     
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

//make this component available to the app
export default MainNavigator;
