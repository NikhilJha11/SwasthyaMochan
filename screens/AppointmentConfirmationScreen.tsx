import { Image, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { darkGreen } from '../sharedStyles';
import { Text } from 'react-native-paper';
import CTABigWhite from '../components/CTABigWhite';
import { AppointmentConfirmationScreenParams } from '../types';
import * as Notifications from 'expo-notifications';
import ReactDOMServer from 'react-dom/server';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const AppointmentConfirmationScreen = () => {
  const params = useRoute().params as AppointmentConfirmationScreenParams;
  const navigation = useNavigation();
  const { t } = useTranslation();
  //const upcommingString = ReactDOMServer.renderToString(<I18nextProvider i18n={i18n}> <Text>{t('UpcomingAppointments')}</Text> </I18nextProvider>);

  console.log(params);

  useEffect(() => {
    (async () => {
      await Notifications.setBadgeCountAsync(1);
      const res = await Notifications.scheduleNotificationAsync({
        content: {
          title: 'OneHeal',
          subtitle: 'UpcomingAppointments',
          body: `You have an appointment at ${params.formattedTime}`,
        },
        trigger: {
          seconds: 5,
        },
      });
    })();
  }, []);

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
          <I18nextProvider i18n={i18n}>{t('Success')}</I18nextProvider>
        </Text>
        <Text
          variant='bodyLarge'
          style={{ color: '#fff', fontWeight: '700', marginBottom: 40 }}
        >
          <I18nextProvider i18n={i18n}>{t('appointmentisset')}</I18nextProvider>
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
          {params.formattedTime}
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
