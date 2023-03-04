import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import OneHealSafeArea from '../components/OneHealSafeArea';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Doctor as DoctorType } from '../types';
import Doctor from '../components/Doctor';
import DateItem from '../components/DateItem';
import CTABig from '../components/CTABig';
import { Button, Dialog, Portal, Text } from 'react-native-paper';

const FULL_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const FULL_WEEK = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const AppointmentScreen = () => {
  const navigation = useNavigation();
  const params = useRoute().params as DoctorType;
  const [days, setDays] = useState<any>([]);
  const [showMoreDays, setShowMoreDays] = useState(7);
  const [time, setTime] = useState('');
  const [choosenDay, setChoosenDay] = useState('');
  const [choosenDate, setChoosenDate] = useState('');
  const [visible, setVisible] = React.useState(false);

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

  const generateDays = () => {
    const nextWeek = new Date();
    let dates = [];

    for (let i = 0; i < showMoreDays; i++) {
      let date = nextWeek.setDate(new Date().getDate() + i);
      // console.log(nextWeek.getDate()); 15, 16, 17, 18
      console.log();
      dates.push({
        day: FULL_WEEK[nextWeek.getDay()],
        fullDate: `, ${nextWeek.getDate()}. ${
          FULL_MONTHS[nextWeek.getMonth()]
        }`,
      });
    }
    setDays(dates);
  };

  useEffect(() => {
    generateDays();
  }, [showMoreDays]);

  useEffect(() => {
    generateDays();
  }, []);

  console.log('days are , ', days);

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
        />

        <ScrollView style={{ flex: 1 }}>
          {days
            ? days.map(
                (
                  day: { day: string; fullDate: string },
                  index: React.Key | null | undefined
                ) => (
                  <DateItem
                    key={index}
                    day={day.day}
                    date={day.fullDate}
                    time={time}
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
                )
              )
            : null}
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
