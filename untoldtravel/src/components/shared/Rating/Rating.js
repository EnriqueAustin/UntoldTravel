//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import { colors } from '../../../constants/theme';
import { getCorrectRating, getFractionDigitsRating, getRatingLabel } from './utils';

// create a component
const Rating = ({
  showLabelInLine, 
  showLableTop,
  containerStyle, 
  rating, 
  disabled = true, 
  size = 12
}) => {
    const _rating = getCorrectRating(rating);
    return (
        <View 
          style={[
            styles.container, containerStyle].concat(
              showLabelInLine ? styles.containerRow : null,
            )}>
            {showLableTop && (
              <Text style={styles.label}>{getFractionDigitsRating(rating)}</Text>
            )}
            <AirbnbRating 
                defaultRating={_rating}
                count={5} 
                showRating={false} 
                selectedColor={colors.primary}
                isDisabled={disabled}
                size={size}
            />
            {showLabelInLine && <Text style={styles.label}>{getFractionDigitsRating(rating)}</Text>}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        alignItems: 'flex-end',
        marginHorizontal: -2,
      },
      containerRow: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      label: {
        color: colors.primary,
        marginLeft: 4,
      },
});

//make this component available to the app
export default Rating;
