import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from 'react-native-paper';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import {
  darkGreen,
  darkGreen000,
  darkGreen050,
  darkGreen100,
  darkGreen200,
} from '../sharedStyles';

type Props = {
  title: string;
};

const NewsItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text variant='labelLarge' style={styles.textTop}>
        NewsItem <MaterialIcons name='info' color={darkGreen} size={24} />
      </Text>
      <Text variant='headlineLarge' style={styles.textBottom}>
        New Hospital
      </Text>
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    paddingRight: 50,
    backgroundColor: darkGreen050,
    marginRight: 30,
  },
  textTop: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6,
    fontWeight: '600',
    marginBottom: 10,
  },
  textBottom: {
    padding: 5,
    fontWeight: '600',
    opacity: 0.8,
  },
});
