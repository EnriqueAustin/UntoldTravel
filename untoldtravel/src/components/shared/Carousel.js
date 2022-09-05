//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {sizes, spacing} from '../../constants/theme';
import { BottomSheetFlatList } from "@gorhom/bottom-sheet"; 

const CARD_WIDTH = sizes.width - 80;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

// create a component
const Carousel = ({renderItem, items = []}) => {
    return (
        <BottomSheetFlatList 
            data={items}
            horizontal
            style={styles.container}
            snapToInterval={CARD_WIDTH_SPACING}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            keyExtractor={i => i.id}
            renderItem={({item, index}) => {
                if (renderItem) {
                    return renderItem({
                        item,
                        index,
                        style: {
                        width: CARD_WIDTH,
                        marginLeft: spacing.l,
                        marginRight: index === items.length - 1 ? spacing.l : 0,
                        },
                    });
                    }
                    return null;
                }} 
        />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingVertical: spacing.m,
    },
});

//make this component available to the app
export default Carousel;
