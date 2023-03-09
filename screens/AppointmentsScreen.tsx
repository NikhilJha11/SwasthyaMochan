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
import Appointment2 from '../components/Appointment2';
import Appointment3 from '../components/Appointment3';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { usePatientsAppointments } from '../hooks/usePatient';

const AppointmentsScreen = () => {
  const [segment, setSegment] = useState('Upcoming');
  const { t } = useTranslation();
  const patientid = 1
  const { data: patientsAppointments, isLoading: isLoadingDoctors } = usePatientsAppointments({
    patientid: patientid,
  }); 

  const upcomingAppointments = patientsAppointments.filter((appointment) => {
    const appointmentDate = new Date(appointment.startDate);
    return appointmentDate >= new Date();
  }).sort((a, b) => {
    const aDate = new Date(a.startDate);
    const bDate = new Date(b.startDate);
    return aDate - bDate;
  });
  const firstUpcomingAppointment = upcomingAppointments[0];
  console.log (firstUpcomingAppointment)

  console.log (upcomingAppointments)

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
              <Appointment2 />
            </>
          ) : (
            <>
              <Text variant='headlineSmall' style={styles.visit}>
              <I18nextProvider i18n={i18n}> <Text>{t('Recentvisits')}</Text> </I18nextProvider>
              </Text>
              <Appointment3 />
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
