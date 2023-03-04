import {
  ScrollView,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { useState } from 'react';
import OneHealSafeArea from '../components/OneHealSafeArea';
import {
  Avatar,
  Button,
  Divider,
  SegmentedButtons,
  Text,
} from 'react-native-paper';
import {
  darkGreen,
  darkGreen100,
  darkGreen200,
  darkGreen300,
  darkGreen500,
  darkGreen600,
} from '../sharedStyles';
import OneHealSegmentedButtons from '../components/OneHealSegmentedButtons';
import { Feather } from '@expo/vector-icons';
import Appointment from '../components/Appointment';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n';

const AppointmentsScreen = () => {
  const [segment, setSegment] = useState('Upcoming');
  const { t } = useTranslation();

  return (
    <OneHealSafeArea statusBar='dark'>
      <View style={styles.container}>
        <Text variant='headlineLarge' style={styles.topText}>
        <I18nextProvider i18n={i18n}> <Text>{t('Appointments')}</Text> </I18nextProvider>
        </Text>

        <OneHealSegmentedButtons segment={segment} setSegment={setSegment} />

        <ScrollView style={styles.appointments}>
          {segment === 'Upcoming' ? (
            <>
              <Text variant='headlineSmall' style={styles.visit}>
              <I18nextProvider i18n={i18n}> <Text>{t('Closestvisits')}</Text> </I18nextProvider>
              </Text>
              <Appointment />
              <Appointment />
              <Appointment />
              <Appointment />
            </>
          ) : (
            <>
              <Text variant='headlineSmall' style={styles.visit}>
              <I18nextProvider i18n={i18n}> <Text>{t('Recentvisits')}</Text> </I18nextProvider>
              </Text>
              <Appointment />
            </>
          )}
        </ScrollView>
      </View>
    </OneHealSafeArea>
  );
};

export default AppointmentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topText: {
    fontWeight: '600',
    paddingTop: 20,
    marginBottom: 30,
  },
  appointments: {
    flex: 1,
    borderRadius: 10,
  },
  visit: {
    marginVertical: 10,
  },
});
