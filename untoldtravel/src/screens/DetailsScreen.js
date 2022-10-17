//import liraries
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Entypo from 'react-native-vector-icons/Entypo';

const height = Dimensions.get('window').height;

// create a component
const DetailsScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <ImageBackground
            source={require('../../assets/images/eea622430834cb64b900c2f03e5be6b8.jpeg')}
            style={styles.backgroundImage}
        >
            <TouchableOpacity 
                style={styles.backIcon} 
                onPress={() => navigation.goBack()}>
                <Entypo 
                    name='chevron-left' 
                    size={32} 
                    color='white'/>
            </TouchableOpacity>
            <View style={styles.titleWrapper} >
                <Text style={styles.itemTitle}>Wheeee</Text>
                <View style={styles.locationwrapper}>
                    <Entypo name='location-pin' size={24} color='white' />
                    <Text style={styles.locationText}>Cape Town</Text>
                </View>
            </View>
        </ImageBackground>

        <View style={styles.descriptionWrapper}>
            <View style={styles.heartWrapper}>
                <Entypo name='heart' size={32} color='green' />
            </View>
            <View style={styles.descriptionTextWrapper}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.descriptionText}>YOOOOOOOOOOO</Text>
            </View>

            <View style={styles.infoWrapper}>
                <View style={styles.infoItem}>
                    <Text style={styles.infoTitle}>PRICE</Text>
                    <View style={styles.infoTextWrapper}>
                        <Text style={styles.infoText}>R 500</Text>
                        <Text style={styles.infoSubText}>/person</Text>
                    </View>
                </View>

                <View style={styles.infoItem}>
                    <Text style={styles.infoTitle}>RATING</Text>
                    <View style={styles.infoTextWrapper}>
                        <Text style={styles.infoText}>5</Text>
                        <Text style={styles.infoSubText}>/5</Text>
                    </View>
                </View>

                <View style={styles.infoItem}>
                    <Text style={styles.infoTitle}>DURATION</Text>
                    <View style={styles.infoTextWrapper}>
                        <Text style={styles.infoText}>1h</Text>
                        <Text style={styles.infoSubText}></Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.buttonWrapper} onPress={() => alert('You Booked A Trip')}>
                <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backgroundImage: {
        height: height * 0.6,
        justifyContent: 'space-between',
    },
    descriptionWrapper: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: -20,
        borderRadius: 25,
    },
    backIcon: {
        marginLeft: 20,
        marginTop: 60,
    },
    titleWrapper: {
        marginHorizontal: 20,
        marginBottom: 40,
    },
    itemTitle: {
        fontSize: 32,
        color: 'white',
    },
    locationwrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    locationText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
    },
    heartWrapper: {
        position: 'absolute',
        right: 40,
        top: -30,
        width: 64,
        height: 64,
        backgroundColor: 'white',
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    descriptionTextWrapper: {
        marginTop: 30,
        marginHorizontal:20,
    },
    descriptionTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
    },
    descriptionText: {
        marginTop: 20,
        fontSize: 16,
        color: 'gray',
        height: 85,
    },
    infoWrapper: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: 'space-between',
    },
    infoItem: {},
    infoTitle: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'gray',
    },
    infoTextWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 5,
    },
    infoText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'green',
    },
    infoSubText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'gray',
    },
    buttonWrapper: {
        marginHorizontal: 20,
        marginTop: 40,
        backgroundColor: 'green',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 20,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    },
});

//make this component available to the app
export default DetailsScreen;
