import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icons from "./Icon";
import {sizes, spacing} from '../constants/theme';

const MainHeader = ({title}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {margin: insets.top}]}>
            <Icons icon='Hamburger' onPress={() => {}} />
            <Text style={styles.title} >{title}</Text>
            <Icons icon= 'Notification' onPress={() => {}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.l,
      },
      title: {
        fontSize: sizes.h3,
        fontWeight: 'bold',
      },
})

export default MainHeader;