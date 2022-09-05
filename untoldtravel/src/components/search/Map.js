import React from "react";
import { StyleSheet, View, Dimensions, TextInput } from "react-native";
import MapView from 'react-native-maps';
//import Carousel from 'react-native-snap-carousel';
//import * as Location from 'expo-location';
//import ServiceList from './serviceList';




export default class Maps extends React.Component {
    render() {
        return (
            <View>
                <MapView style={styles.map}
                        initialRegion={{
                            latitude: -32.899996,
                            longitude: 17.983329,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }}
                    >
                        <MapView.Marker
                            coordinate={{
                                latitude: -32.89999,
                                longitude: 17.9833,
                            }}
                        >
                            <View style={styles.radius}>
                                <View style={styles.marker} />
                            </View>
                        </MapView.Marker>
                    </MapView>
                <View style={{ position: 'absolute', top: 10, width: '100%' }}>
                        <TextInput
                            style={{
                                borderRadius: 10,
                                margin: 10,
                                color: '#000',
                                borderColor: '#666',
                                backgroundColor: '#FFF',
                                borderWidth: 1,
                                height: 45,
                                paddingHorizontal: 10,
                                fontSize: 18,
                            }}
                            placeholder={'Search'}
                            placeholderTextColor={'#666'}
                        />
                    </View>
                <View>
                
                    

                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    radius: {
        height: 50,
        width: 50,
        borderRadius: 50 / 1.5,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,122,255,0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0,122,255,0.1)',
        justifyContent: 'center',
    },
    marker: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 20 / 2,
        overflow: 'hidden',
        backgroundColor: '#007AFF'
    },
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});