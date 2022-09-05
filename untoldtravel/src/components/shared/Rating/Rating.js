//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

// create a component
const Rating = ({rating}) => {
    return (
        <View style={styles.container}>
            <AirbnbRating />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Rating;
