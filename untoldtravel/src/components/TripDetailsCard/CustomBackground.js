//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { colors, sizes } from '../../constants/theme';

// create a component
const CustomBackground = ({animatedIndex, style}) => {
    const containerStyle = useAnimatedStyle(() => ({
        ...style,
        backgroundColor: colors.white,
        borderTopLeftRaduis: sizes.radius,
        borderTopRightRaduis: sizes.radius,
        opacity: interpolate(
            animatedIndex.value,
            [0, 0.08],
            [0, 1],
            Extrapolation.CLAMP,
        ),
    }));
    return (
        <Animated.View style={containerStyle} />
    );
};



//make this component available to the app
export default CustomBackground;
