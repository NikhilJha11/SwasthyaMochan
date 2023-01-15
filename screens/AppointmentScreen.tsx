import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import OneHealSafeArea from '../components/OneHealSafeArea';
import { useRoute } from '@react-navigation/native';
import { Doctor as DoctorType } from '../types';
import Doctor from '../components/Doctor';
import DateItem from '../components/DateItem';
import CTABig from '../components/CTABig';

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
  const params = useRoute().params as DoctorType;
  const [days, setDays] = useState<any>([]);
  const [showMoreDays, setShowMoreDays] = useState(7);

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
          department={params.department}
          name={params.name}
          image={params.image}
          key={params.id}
          location={params.location}
          id={params.id}
          styles={{ marginTop: 20, backgroundColor: '#fff' }}
        />

        <ScrollView style={{ flex: 1 }}>
          {days
            ? days.map(
                (
                  day: { day: string; fullDate: string },
                  index: React.Key | null | undefined
                ) => <DateItem key={index} day={day.day} date={day.fullDate} />
              )
            : null}
          <CTABig
            icon={'arrow-drop-down-circle'}
            text='Show More'
            onPress={() => setShowMoreDays((prev) => prev + 7)}
            style={{ marginHorizontal: 20 }}
          />
        </ScrollView>
      </View>
    </OneHealSafeArea>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
  },
});
