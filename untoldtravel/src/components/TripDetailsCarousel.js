//import liraries
import React, { Component, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Animated } from 'react-native';
import {sizes} from '../constants/theme';
import {SharedElement} from 'react-navigation-shared-element';
import CarouselIndicators from './CarouselIndicators';
import * as Animatable from 'react-native-animatable';

// create a component
const TripDetailsCarousel = ({slides, id}) => {
    const scrollAnimated = useRef(new Animated.Value(0)).current;
    return (
        <>
            <Animated.FlatList
                data={slides}
                horizontal
                pagingEnabled
                bounces={false}
                onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollAnimated}}}],
                {useNativeDriver: false},
                )}
                renderItem={({item: image, index}) => {
                if (!index) {
                    return (
                    <View style={styles.slide}>
                        <SharedElement id={`trip.${id}.image`} style={styles.slide}>
                        <Image source={image} style={styles.image} />
                        </SharedElement>
                    </View>
                    );
                }
                return (
                    <View style={styles.slide}>
                    <Image source={image} style={styles.image} />
                    </View>
                );
                }}
            />
            <View style={styles.indicators}>
                <CarouselIndicators 
                    slidesCount={slides.length}
                    slideWidth={sizes.width}
                    dotSize={12}
                    dotSpacing={8}
                    scrollAnimated={scrollAnimated}
                />
            </View>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    slide: {
        width: sizes.width,
        height: sizes.height,
      },
      image: {
        width: sizes.width,
        height: sizes.height,
        resizeMode: 'cover',
      },
      indicators: {
        position: 'absolute',
        width: sizes.width,
        bottom: 60,
        alignItems: 'center',
      },
});

//make this component available to the app
export default TripDetailsCarousel;
