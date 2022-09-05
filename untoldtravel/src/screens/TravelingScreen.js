//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import {BUSINESS} from '../data/index';



// create a component
const TravelingScreen = ({navigations}) => {
    return (
        <View >
            <FlatList 
                data={BUSINESS}
                renderItem={({item}) => (
                    <View style={styles.holder}>
                        <Text>{item.title}</Text>
                        <Text>{item.location}</Text>
                    </View>
                )}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    holder: {
        margin: 10,
    },
});

//make this component available to the app
export default TravelingScreen;
