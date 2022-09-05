//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {sizes} from '../../../constants/theme';

// create a component
const CardMedia = ({source, borderBottomRadius = false}) => {
    return (
        <View
            style={[styles.media].concat(
                borderBottomRadius ? styles.borderBottomRadius : null,
            )}>
            <Image style={styles.image} source={source} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    media: {
        flex: 1,
        borderTopLeftRadius: sizes.radius,
        borderTopRightRadius: sizes.radius,
        overflow: 'hidden',
      },
      image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
      },
      borderBottomRadius: {
        borderBottomLeftRadius: sizes.radius,
        borderBottomRightRadius: sizes.radius,
      },
});

//make this component available to the app
export default CardMedia;
