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

const AppointmentScreen = () => {
  const navigation = useNavigation();
  const params = useRoute().params as DoctorType;
  const [days, setDays] = useState<any>([]);
  const [showMoreDays, setShowMoreDays] = useState(7);
  const [time, setTime] = useState('');
  const [choosenDay, setChoosenDay] = useState('');
  const [choosenDate, setChoosenDate] = useState('');
  const [visible, setVisible] = React.useState(false);
  const { data: dataAppointments, isLoading: isLoadingAppointments } =
    useAppointments({ doctorId: params.doctorId, enabled: true });

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const confirmAppointment = ({
    time,
    day,
    date,
  }: {
    time: string;
    day: string;
    date: string;
  }) => {
    setVisible(false);
    navigation.navigate('AppointmentStack', {
      screen: 'AppointmentConfirmationScreen',
      params: { time, day, date, doctor: params.name },
    });
  };

  // console.log(
  //   'apps are ',
  //   moment('2023-03-05T08:00:00.000Z').format('DD-MM-YYYY HH:mm'),
  //   FULL_WEEK[date.getDay()]
  //   // date.getFullYear() + '-' + date.getMonth()+1 + '-'
  // );

  const map = dataAppointments?.reduce((acc, curr) => {
    const { startDate } = curr;
    const [date, time] = startDate.split('T');
    const [hh, mm, ss] = time.split(':');
    const formattedTime = `${hh}:${mm}`;
    if (!acc.has(date)) {
      acc.set(date, {
        startDate: date,
        time: [formattedTime],
      });
    } else acc.get(date).time.push(formattedTime);
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
                confirmAppointment={confirmAppointment}
                choosenDate={choosenDate}
                setChoosenDate={setChoosenDate}
                choosenDay={choosenDay}
                setChoosenDay={setChoosenDay}
                setVisible={setVisible}
                visible={visible}
              />
            ))
          ) : null}
          <CTABig
            icon={'arrow-drop-down-circle'}
            text='Show More'
            onPress={() => setShowMoreDays((prev) => prev + 7)}
            style={{ marginHorizontal: 20 }}
          />
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Confirm Appointment</Dialog.Title>
              <Dialog.Content>
                <Text variant='bodyLarge' style={{ fontWeight: '500' }}>
                  {params.name}
                </Text>
              </Dialog.Content>
              <Dialog.Content>
                <Text variant='bodyMedium'>
                  {choosenDay}
                  {choosenDate}
                </Text>
                <Text variant='bodyMedium'>{time}</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Cancel</Button>
                <Button
                  onPress={() =>
                    confirmAppointment({
                      time,
                      day: choosenDay,
                      date: choosenDate,
                    })
                  }
                >
                  Confirm
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
