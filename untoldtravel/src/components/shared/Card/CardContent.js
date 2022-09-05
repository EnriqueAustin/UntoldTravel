//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {spacing} from '../../../constants/theme';

// create a component
const CardContent = ({children, style}) => {
    return (
        <View style={[styles.content, style]}>{children}</View>
    );
};

// define your styles
const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: spacing.m,
        paddingVertical: spacing.l / 2,
      },
});

//make this component available to the app
export default CardContent;
