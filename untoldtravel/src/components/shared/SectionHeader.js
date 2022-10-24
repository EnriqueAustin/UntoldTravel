import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {colors, sizes, spacing} from '../../constants/theme';

const SectionHeader = ({
  title, 
  containerStyle, 
  titleStyle, 
  onPress, 
  buttonTitle = 'Button'}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {onPress && <TouchableOpacity title={buttonTitle} onPress={onPress} style={styles.button} >
        <Text style={styles.buttonColor}>{buttonTitle}</Text>
      </TouchableOpacity> }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: spacing.l,
    marginRight: spacing.m,
    marginTop: spacing.l,
    marginBottom: 10,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.green,
    // backfaceVisibility: 'hidden',
    borderRadius: sizes.radius,
    padding: 5,
    paddingHorizontal: 8,
  },
  buttonColor: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default SectionHeader;