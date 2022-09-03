//import liraries
import React, { Component, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {colors, sizes} from '../constants/theme';

// create a component
const CarouselIndicators = ({
    slidesCount,
    dotSize,
    dotSpacing,
    slideWidth,
    scrollAnimated,
    }) => {
    return (
        <View style={styles.container}>
            <Text>CarouselIndicator</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingHorizontal: 2,
        paddingVertical: 4,
        borderRadius: sizes.radius,
      },
      dot: {
        backgroundColor: colors.primary,
        opacity: 0.3,
        borderRadius: 12,
      },
      indicator: {
        position: 'absolute',
        backgroundColor: colors.primary,
        borderRadius: sizes.radius,
        top: 4,
      },
});

//make this component available to the app
export default CarouselIndicators;
