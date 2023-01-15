import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  darkGreen,
  darkGreen200,
  darkGreen500,
  darkGreen600,
} from '../sharedStyles';
import { Text } from 'react-native-paper';
import CTABigWhite from '../components/CTABigWhite';
import { AppointmentConfirmationScreenParams } from '../types';

const AppointmentConfirmationScreen = () => {
  const params = useRoute().params as AppointmentConfirmationScreenParams;
  const navigation = useNavigation();

  console.log(params);

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('../assets/images/success.png')}
          resizeMode='contain'
          style={styles.img}
        />
        <Text
          variant='displayMedium'
          style={{ color: '#fff', fontWeight: '700', marginBottom: 5 }}
        >
          Success!
        </Text>
        <Text
          variant='bodyLarge'
          style={{ color: '#fff', fontWeight: '700', marginBottom: 40 }}
        >
          Your appointment is set.
        </Text>
        <Text
          variant='bodyLarge'
          style={{ color: '#fff', fontWeight: '700', marginBottom: 10 }}
        >
          {params.doctor}
        </Text>
        <Text
          variant='bodyLarge'
          style={{ color: '#fff', fontWeight: '700', marginBottom: 20 }}
        >
          {params.day}
          {params.date}, {params.time}
        </Text>
        <CTABigWhite
          icon='calendar'
          text='See Appointments'
          onPress={() => navigation.navigate('Root', { screen: 'TabThree' })}
        />
      </View>
    </View>
  );
};

export default AppointmentConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  topSection: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkGreen,
    paddingHorizontal: 20,
  },
  img: {
    width: 250,
    height: 250,
  },
});
