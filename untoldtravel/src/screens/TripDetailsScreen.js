//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {colors, sizes, spacing} from '../constants/theme';
import Icon from '../components/Icon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TripDetailsCard from '../components/TripDetailsCard';
import * as Animatable from 'react-native-animatable';
import TripDetailsCarousel from '../components/TripDetailsCarousel';

// create a component
const TripDetailsScreen = ({navigation, route}) => {
    const insets = useSafeAreaInsets();
    const {trip} = route.params;
    const slides = [trip.image, ...trip.gallery];
    return (
        <View style={styles.container}>
            <Animatable.View
                style={[styles.backButton, {marginTop: insets.top}]}
                animation="fadeIn"
                delay={500}
                duration={400}
                easing="ease-in-out">
                <Icon
                    icon="ArrowLeft"
                    style={styles.backIcon}
                    onPress={navigation.goBack}
                />
            </Animatable.View>
            <TripDetailsCarousel slides={slides} id={trip.id} />

        
            {/* <SharedElement id={`trip.${trip.id}.image`} style={[StyleSheet.absoluteFill]} >
                <View style={[StyleSheet.absoluteFill, styles.imageBox]}>
                    <Image source={trip.image} style={[StyleSheet.absoluteFill, styles.image]}/>
                </View>
            </SharedElement> */}
            <TripDetailsCard trip={trip} />
        </View>
    );
};

TripDetailsScreen.sharedElement = route => {
    const {trip} = route.params;
    return [{
        id: `trip.${trip.id}.image`,
    }]
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBox: {
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
