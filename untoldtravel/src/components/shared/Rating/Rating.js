//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import { colors } from '../../../constants/theme';
import { getCorrectRating } from './utils';

// create a component
const Rating = ({containerStyle, rating, disabled = true, size = 12}) => {
    const _rating = getCorrectRating(rating);
    return (
        <View style={[styles.container, containerStyle]}>
            <AirbnbRating 
                defaultRating={_rating}
                count={5} 
                showRating={false} 
                selectedColor={colors.primary}
                isDisabled={disabled}
                size={size}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        marginHorizontal: -2,   
    },
});

//make this component available to the app
export default Rating;
