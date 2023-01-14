import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { darkGreen } from '../sharedStyles';
import { Text } from 'react-native-paper';

const NotFound = () => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <Image
        source={require('../assets/images/notfound2.png')}
        resizeMode='contain'
        style={{
          width: 200,
          height: 200,
        }}
      />
      <Text
        variant='headlineMedium'
        style={{ color: darkGreen, fontWeight: '600' }}
      >
        No doctors found...
      </Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({});
