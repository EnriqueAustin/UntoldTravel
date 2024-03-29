//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/theme';
import FavoriteButton from './FavoritesButton';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

const CARD_WIDTH = sizes.width - 80;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

// create a component
const TopPlacesCarousel = ({list}) => {
    const navigation = useNavigation();
    return (
        <FlatList 
            style={shadow.light}
            data={list}
            horizontal
            snapToInterval={CARD_WIDTH_SPACING}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            keyExtractor={i => i.id}
            renderItem={({item, index}) => {
                return (
                    <TouchableOpacity 
                        onPress={() => {
                          navigation.navigate('TripDetails', {trip: item});
                        }}
                        style={{
                            marginLeft: spacing.l,
                            marginRight: index === list.length - 1 ? spacing.l : 0,
                        }}
                    >
                        <View style={[styles.card, shadow.light]}>
                            <FavoriteButton style={styles.favorite} />
                            <SharedElement 
                              id={`trip.${item.id}.image`} 
                              style={StyleSheet.absoluteFill}
                            >
                              <View style={styles.imageBox}>
                                  <Image source={item.image} style={styles.image}/>
                              </View>
                            </SharedElement>
                            <View style={styles.titleBox}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.location}>{item.location}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
            }}
        />
    );
};

// define your styles
const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginVertical: 10,
        backgroundColor: colors.white,
        
      },
      favorite: {
        position: 'absolute',
        top: spacing.m,
        right: spacing.m,
        zIndex: 1,
      },
      imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: sizes.radius,
        overflow: 'hidden',
      },
      image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'cover',
      },
      titleBox: {
        position: 'absolute',
        top: CARD_HEIGHT - 80,
        left: 16,
      },
      title: {
        fontSize: sizes.h2,
        fontWeight: 'bold',
        color: colors.white,
      },
      location: {
        fontSize: sizes.h3,
        color: colors.white,
      },
});

//make this component available to the app
export default TopPlacesCarousel;
