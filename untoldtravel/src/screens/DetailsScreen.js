//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from '../components/Icon';
import { colors, sizes, spacing } from '../constants/theme';

import Entypo from "react-native-vector-icons/Entypo";

import Rating from "../components/shared/Rating/Rating";
import CardFavoriteIcon from "../components/shared/Card/CardFavoriteIcon";
import Divider from "../components/shared/Divider";

const height = Dimensions.get("window").height;

// create a component
const DetailsScreen = ({ active }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  return (
    <>
    <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ 
          backgroundColor: "white", 
          paddingBottom: 20,
          flex: 1,
        }}
    >
        <StatusBar 
            barStyle='light-content'
            translucent
            backgroundColor='rgba(0,0,0,0)'
        />
        <ImageBackground 
            style={styles.headerImage} 
            source={item.image}
        >

        <View style={styles.header}>
            <View style={styles.iconBack}>
                <Icon
                    icon="ArrowLeft"
                    style={styles.backIcon}
                    onPress={navigation.goBack}
                    size={40}
                />  
            </View>
            <CardFavoriteIcon size={100} active={false} onPress={() => {}} />
        </View>
        </ImageBackground>
        <View>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon icon="Location" size={48} />
          </TouchableOpacity>
          <View style={{marginTop: 20, paddingHorizontal: 20,}}>
            <Text 
              style={{
                fontSize:20, 
                fontWeight: 'bold'
              }}>
                {item.title}
            </Text>
            <Text 
              style={{
                fontSize:12, 
                fontWeight: '400',
                color: colors.lightGray,
              }}>
                {item.location}
            </Text>

            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Rating
                showLabelInLine
                rating={item.rating} 
                size={12} 
                containerStyle={styles.rating} 
              />
              <Text style={styles.reviesCount}>12 revievs</Text>
            </View>
            
            <Divider style={{marginTop: 20,}} enabledSpacing={false} />

            <View style={{marginTop: 20}}>
              <Text>{item.description}</Text>
            </View>
          </View>
          <View 
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: 'space-between',
              paddingLeft: 20,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Price per night
            </Text>
            <View
              style={styles.priceTag}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: colors.white,
                  marginLeft: 5,
                }}
              >
                R {item.pricePeerDay}
              </Text>

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: colors.gray,
                  marginLeft: 5,
                }}
              >
                + breakfast
              </Text>
            </View>
          </View>

          
        </View>
    </ScrollView>
    <TouchableOpacity style={styles.btn}>
                <Text
                  style={{
                    color: colors.white,
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Book Now
                </Text>
          </TouchableOpacity>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: colors.green,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerImage: {
    height: 400,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    overflow: 'hidden',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
    
  },
  iconBack: {
    borderRadius: sizes.radius,
    backgroundColor: '#f4f4f4',
    padding: 0,
  },
  backIcon: {
    // tintColor: colors.white,
  },
  favoritIcon: {
    color: colors.white,
  },
  rating: {
    // marginTop: spacing.m / 2,
  },
  reviesCount: {
    fontSize: 13,
    color: colors.lightGray,
  },
  priceTag: {
    height: 40,
    alignItems: "center",
    marginLeft: 40,
    paddingLeft:20,
    flex: 1,
    backgroundColor: colors.lightGray,
    borderTopLeftRadius: sizes.radius,
    borderBottomLeftRadius: sizes.radius,
    flexDirection: "row",
  },
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: colors.green,
    borderRadius: sizes.radius,
  },
});

//make this component available to the app
export default DetailsScreen;
