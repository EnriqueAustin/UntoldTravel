//import liraries
import React, { Component } from 'react';
import {View} from 'react-native';
import {colors, shadow} from '../constants/theme';
import Icon from './Icon';

// create a component
const FavoriteButton = ({active, style}) => {
    return (
      <View
        style={[
          {
            backgroundColor: colors.white,
            padding: 4,
            borderRadius: 20,
          },
          shadow.light,
          style,
        ]}>
        <Icon icon={active ? 'FavoriteFilled' : 'Favorite'} size={24} />
      </View>
    );
  };

//make this component available to the app
export default FavoriteButton;
