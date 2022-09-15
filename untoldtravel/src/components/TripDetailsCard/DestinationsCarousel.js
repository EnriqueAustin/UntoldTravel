//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../shared/Card/Card';
import Carousel from '../shared/Carousel';
import {colors, sizes, spacing} from '../../constants/theme';
import CardMedia from '../shared/Card/CardMedia';
import CardContent from '../shared/Card/CardContent';
import Icon from '../Icon';
import Rating from '../shared/Rating/Rating';
import CardFavoriteIcon from '../shared/Card/CardFavoriteIcon';

const CARD_HEIGHT = 200;

// create a component
const DestinationCarousel = ({destination}) => {
    return (
        <Carousel 
            items={destination} 
            renderItem={({item, style}) => {
                return (
                    <Card style={[styles.card, style]}>
                        <CardFavoriteIcon active={false} onPress={() => {}} />
                        <CardMedia source={item.image} />
                        <CardContent style={styles.content}>
                            <View style={styles.titleBox}>
                                <Text style={styles.title}>{item.title}</Text>
                                <View style={styles.locationBox}>
                                    <Text style={styles.location}>{item.location}</Text>
                                    <Icon icon="Location" size={18} style={styles.locationIcon} />
                                </View> 
                                <Rating
                                  showLabelInLine
                                  rating={item.rating} 
                                  size={12} 
                                  containerStyle={styles.rating} />
                            </View>
                            
                        </CardContent>
                    </Card>
                );
            }} 
        />
    );
};

const styles = StyleSheet.create({
    card: {
      height: CARD_HEIGHT,
    },
    content: {
      height: 88,
    },
    titleBox: {
      flex: 1,
    },
    title: {
      fontSize: sizes.body,
      fontWeight: 'bold',
      color: colors.primary,
    },
    locationBox: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 2,
    },
    location: {
      fontSize: sizes.caption,
      color: colors.lightGray,
    },
    locationIcon: {
      tintColor: colors.gray,
    },
    rating: {
      marginTop: spacing.m / 2,
    },
    priceBox: {
      alignItems: 'flex-end',
      flexShrink: 0,
    },
    price: {
      fontSize: sizes.body,
      fontWeight: 'bold',
      color: colors.primary,
    },
    priceCaption: {
      fontSize: sizes.caption,
      color: colors.lightGray,
      marginTop: 2,
    },
  });

//make this component available to the app
export default DestinationCarousel;
