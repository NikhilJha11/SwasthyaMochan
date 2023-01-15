import { StyleSheet, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { darkGreen, darkGreen500 } from '../sharedStyles';
import { Text } from 'react-native-paper';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const CTASmall = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: darkGreen500,
      }}
    >
      <Text
        style={{ color: darkGreen, opacity: 0.7, marginRight: 5 }}
        variant='labelSmall'
      >
        See All
      </Text>
      <MaterialIcons name='keyboard-arrow-right' />
    </TouchableOpacity>
  );
};

export default CTASmall;

const styles = StyleSheet.create({});
