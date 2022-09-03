//import liraries
import React, { Component, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {colors, sizes, spacing} from '../../constants/theme';
import * as Animatable from 'react-native-animatable';
import BottomSheet from '@gorhom/bottom-sheet';
import CustomHandler from './CustomHandler';


// create a component
const TripDetailsCard = ({trip}) => {
  const snapPoints = useMemo(() => ['30%', '80%']);
    return (
      <BottomSheet snapPoints={snapPoints} handleComponent={CustomHandler} index={0} >
            <Animatable.View
              style={styles.header}
              animation="fadeInUp"
              delay={500}
              easing="ease-in-out"
              duration={400}
            > 
              <Text style={styles.title}>{trip.title}</Text>
              <Text style={styles.location}>{trip.location}</Text>
            </Animatable.View>
      </BottomSheet>
    );
  };

// define your styles
const styles = StyleSheet.create({
    header: {
      paddingVertical: spacing.l,
      paddingHorizontal: spacing.l,
    },
    title: {
      fontSize: sizes.title,
      fontWeight: 'bold',
      color: colors.primary,
    },
    location: {
      fontSize: sizes.title,
      color: colors.primary,
    },
  });

//make this component available to the app
export default TripDetailsCard;
