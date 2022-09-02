//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {sizes, spacing} from '../constants/theme';

// create a component
const ScreenHeader = ({mainTitle, secondTitle}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>{mainTitle}</Text>
            <Text style={styles.secondTitle}>{secondTitle}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: spacing.l,
        paddingVertical: spacing.l,
      },
      mainTitle: {
        fontSize: sizes.title,
        fontWeight: 'bold',
      },
      secondTitle: {
        fontSize: sizes.title,
      },
});

//make this component available to the app
export default ScreenHeader;
