//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {colors, sizes, spacing} from '../../../constants/theme';
import Rating from './Rating';
import { getFractionDigitsRating } from './utils';

// create a component
const RatingOverall = ({rating, containerStyle}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.rating}>{getFractionDigitsRating(rating)}</Text>
            <View>
              <Text style={styles.caption}>Overall Rating</Text>
              
              <Rating rating={rating} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: sizes.title,
    color: colors.primary,
    marginRight: spacing.s,
  },
  caption: {
    fontSize: sizes.caption,
    color: colors.lightGray,
  },
});

//make this component available to the app
export default RatingOverall;
