//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {colors, shadow, sizes} from '../../../constants/theme';

// create a component
const Card = ({children, style, onPress, shadowType = 'light'}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.card, style, shadow[shadowType]]}>
            <View style={styles.inner}>{children}</View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 200,
        backgroundColor: colors.white,
        borderRadius: sizes.radius,
      },
      inner: {
        width: '100%',
        height: '100%',
      },
});

//make this component available to the app
export default Card;
