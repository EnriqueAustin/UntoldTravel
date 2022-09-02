//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {colors, sizes, spacing} from '../constants/theme';

// create a component
const TripDetailsScreen = ({navigation, route}) => {
    const {trip} = route.params;
    return (
        <View style={styles.container}>
            <View>
                <Image source={trip.image} style={[StyleSheet.absoluteFill]}/>
            </View>
        </View>
    );//
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBox: {
        borderRadius: sizes.radius,
        overflow: 'hidden',
    },
    image: {
        width: sizes.width,
        height: sizes.height,
        resizeMode: 'cover',
    },
    backButton: {
        position: 'absolute',
        left: spacing.l,
        zIndex: 1,
    },
    backIcon: {
        tintColor: colors.white,
    },
});

//make this component available to the app
export default TripDetailsScreen;
