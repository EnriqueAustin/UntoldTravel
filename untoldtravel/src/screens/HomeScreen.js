//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { colors } from '../constants/theme';
import {PLACES, TOP_PLACES} from '../data/index';

import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import SectionHeader from '../components/SectionHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import TripsList from '../components/TripsList';


// create a component
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <MainHeader title='Untold Travel' />
            <ScreenHeader mainTitle= 'Find Your' secondTitle='Destination' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <TopPlacesCarousel list={TOP_PLACES} />
                <SectionHeader
                    title="Popular Destinations"
                    buttonTitle="See All"
                    onPress={() => {}}
                />
                <TripsList list={PLACES} />
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light ,
    },
});

//make this component available to the app
export default HomeScreen;
