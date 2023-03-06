import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import OneHealSafeArea from '../components/OneHealSafeArea';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Doctor as DoctorType } from '../types';
import Doctor from '../components/Doctor';
import DateItem from '../components/DateItem';
import CTABig from '../components/CTABig';
import {
  ActivityIndicator,
  Button,
  Dialog,
  Portal,
  Text,
} from 'react-native-paper';
import { useAppointments } from '../hooks/useAppointments';
import { darkGreen } from '../sharedStyles';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n';
import {
  AddAppointmentParams,
  useAddAppointment,
} from '../hooks/useAddAppointment';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const AppointmentScreen = () => {
  const addAppointmentMutation = useMutation({
    mutationKey: ['addAppointment'],
    mutationFn: async (params: AddAppointmentParams) =>
      axios.post(
        'https://lachs.informatik.tu-chemnitz.de/planspiel/v1/addappointment',
        params
      ),
  });

  const navigation = useNavigation();
  const params = useRoute().params as DoctorType;
  const [time, setTime] = useState('');
  const [choosenDay, setChoosenDay] = useState('');
  const [choosenDate, setChoosenDate] = useState('');
  const [visible, setVisible] = React.useState(false);
  const { data: dataAppointments, isLoading: isLoadingAppointments } =
    useAppointments({ doctorId: params.doctorId, enabled: true });
  const { t } = useTranslation();
  const [chosenTimeSlotId, setChosenTimeSlotId] = useState(0);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const confirmAppointment = ({
    timeSlotId,
    formattedTime,
  }: {
    timeSlotId: number;
    formattedTime: string;
  }) => {
    setVisible(false);
    addAppointmentMutation.mutate({
      appointmentId: chosenTimeSlotId,
      isPreliminaryCheckup: true,
      patientId: 1,
    });
    navigation.navigate('AppointmentStack', {
      screen: 'AppointmentConfirmationScreen',
      params: { formattedTime, timeSlotId, doctor: params.name },
    });
  };

  // console.log(
  //   'apps are ',
  //   moment('2023-03-05T08:00:00.000Z').format('DD-MM-YYYY HH:mm'),
  //   FULL_WEEK[date.getDay()]
  //   // date.getFullYear() + '-' + date.getMonth()+1 + '-'
  // );

  const map = dataAppointments?.reduce((acc, curr) => {
    const { startDate, timeSlotId } = curr;
    const [date, time] = startDate.split('T');
    const [hh, mm, ss] = time.split(':');
    const formattedTime = `${hh}:${mm}`;
    if (!acc.has(date)) {
      acc.set(date, {
        startDate: date,
        time: [...acc, { timeSlotId: timeSlotId, formattedTime }],
      });
    } else acc.get(date).time.push({ timeSlotId: timeSlotId, formattedTime });
    return acc;
  }, new Map());
  let result;
  if (map) result = [...map.values()];

  return (
    <OneHealSafeArea statusBar='light'>
      <View style={styles.container}>
        <Doctor
          specialization={params.specialization}
          name={params.name}
          key={params.doctorId}
          doctorId={params.doctorId}
          locationId={params.locationId}
          styles={{ marginTop: 20, backgroundColor: '#fff' }}
          chosenLocation={params.chosenLocation}
          chosenLocationName={params.chosenLocationName}
        />

        <ScrollView style={{ flex: 1 }}>
          {!dataAppointments || isLoadingAppointments ? (
            <ActivityIndicator animating color={darkGreen} size='large' />
          ) : isLoadingAppointments ? (
            <ActivityIndicator animating color={darkGreen} size='large' />
          ) : result ? (
            result.map((data, index: React.Key | null | undefined) => (
              <DateItem
                key={index}
                day={data.startDate}
                date={data.startDate}
                time={data.time}
                setTime={setTime}
                doctor={`${params.name}`}
                choosenDate={choosenDate}
                setChoosenDate={setChoosenDate}
                choosenDay={choosenDay}
                setChoosenDay={setChoosenDay}
                setVisible={setVisible}
                visible={visible}
                chosenTimeSlotId={chosenTimeSlotId}
                setChosenTimeSlotId={setChosenTimeSlotId}
              />
            ))
          ) : null}

          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>
                <I18nextProvider i18n={i18n}>
                  {' '}
                  <Text>{t('ConfirmAppointment')}</Text>{' '}
                </I18nextProvider>
              </Dialog.Title>
              <Dialog.Content>
                <Text variant='bodyLarge' style={{ fontWeight: '500' }}>
                  {params.name}
                </Text>
              </Dialog.Content>
              <Dialog.Content>
                <Text variant='bodyMedium'>{choosenDay}</Text>
                <Text variant='bodyMedium'>{choosenDate}</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button
                  mode='outlined'
                  textColor={darkGreen}
                  onPress={() =>
                    confirmAppointment({
                      formattedTime: choosenDay,
                      timeSlotId: chosenTimeSlotId,
                    })
                  }
                >
                  <I18nextProvider i18n={i18n}>
                    {' '}
                    <Text>{t('Confirm')}</Text>{' '}
                  </I18nextProvider>
                </Button>
                <Button onPress={hideDialog}>
                  <I18nextProvider i18n={i18n}>
                    {' '}
                    <Text>{t('Cancel')}</Text>{' '}
                  </I18nextProvider>
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </ScrollView>
      </View>
    </OneHealSafeArea>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
