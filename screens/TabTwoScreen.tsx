import { useEffect, useState } from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet } from 'react-native';
import CTABig from '../components/CTABig';
import DoctorBanner from '../components/DoctorBanner';
import NewsItem from '../components/NewsItem';
import OneHealAppBar from '../components/OneHealAppBar';
import OneHealSafeArea from '../components/OneHealSafeArea';
import { PillReminder } from '../components/PillReminder';
import * as Notifications from 'expo-notifications';
import { usePatientsAppointments } from '../hooks/usePatient';
import {useAppointments} from '../hooks/useAppointments';

import { View } from '../components/Themed';
import { darkGreen, darkGreen000 } from '../sharedStyles';
import { useNavigation } from '@react-navigation/native';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { useNews } from '../hooks/useNews';
import moment from 'moment';
import { useLocations } from '../hooks/useLocations';
import { useDoctors } from '../hooks/useDoctors';
import { useDoctorsByLocation } from '../hooks/useDoctorsbyLocation';
import { ActivityIndicator } from 'react-native-paper';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
export default function TabTwoScreen() {
  const navigation = useNavigation();
  const { data: dataNews } = useNews();
  const { t } = useTranslation();
  const patientid = 1
  let nearestAppointment = null;
  let nearestAppointmentDateDiff = Infinity;
  let lastAppointment ;
  let DoctorNameUpcoming;
  let DoctorNameRecent;

  try {
    const { data: patientsAppointments } = usePatientsAppointments({
      patientid: patientid,
    });
    const { data: locations } = useLocations();
  
    const doctorsByLocation = {};
  
    locations?.forEach((location) => {
      try {
        const { doctors } = useDoctorsByLocation(location.locationId);
        if (doctors) {
          doctorsByLocation[location.locationId] = doctors;
        }
      } catch (error) {
        console.error(`Error fetching doctors for location ${location.locationId}:`, error);
      }
    });
  
   
  
    const currentDate = new Date();
    const options = { timeZone: 'Europe/Berlin' };
    const currentDateString = currentDate.toLocaleString('de-DE', options);
    const currentDateTime = new Date(currentDateString);
  
    patientsAppointments?.forEach((appointment) => {
      try {
        const appointmentDate = new Date(appointment.startDate);
        const appointmentDateString = appointmentDate.toLocaleString('de-DE', options);
        const appointmentDateTime = new Date(appointmentDateString);
  
        if (appointmentDateTime >= currentDateTime && appointmentDateTime < nearestAppointmentDateDiff) {
          nearestAppointment = appointment;
          nearestAppointmentDateDiff = appointmentDateTime - currentDateTime;
        }
      } catch (error) {
        console.error(`Error processing appointment ${appointment.appointmentId}:`, error);
      }
    });
  
    const recentAppointments = patientsAppointments?.filter((appointment) => {
      try {
        const appointmentDate = new Date(appointment.startDate);
        return appointmentDate < new Date();
      } catch (error) {
        console.error(`Error processing appointment ${appointment.appointmentId}:`, error);
        return false;
      }
    }).sort((a, b) => {
      try {
        const aDate = new Date(a.startDate);
        const bDate = new Date(b.startDate);
        return bDate - aDate;
      } catch (error) {
        console.error(`Error sorting appointments:`, error);
        return 0;
      }
    });
    
    
    if (recentAppointments) 
    {
      lastAppointment = recentAppointments[0];
    }
  
    const doctorIdToFindUpcoming = nearestAppointment?.doctorId;
  
    const filteredDoctors = Object.values(doctorsByLocation).reduce((acc, doctors) => {
      try {
        const matchingDoctors = doctors.filter((doctor) => doctor.doctorId === doctorIdToFindUpcoming);
        return [...acc, ...matchingDoctors];
      } catch (error) {
        console.error(`Error filtering doctors:`, error);
        return acc;
      }
    }, []);
    DoctorNameUpcoming = filteredDoctors[0]?.name


    const doctorIdToFindRecent = lastAppointment?.doctorId;
    const filteredDoctorsRecent = Object.values(doctorsByLocation).reduce((acc, doctors) => {
      try {
        const matchingDoctors = doctors.filter((doctor) => doctor.doctorId === doctorIdToFindRecent);
        return [...acc, ...matchingDoctors];
      } catch (error) {
        console.error(`Error filtering doctors:`, error);
        return acc;
      }
    }, []);

    
    console.log(filteredDoctors[0]?.name);
    DoctorNameRecent = filteredDoctorsRecent[0]?.name;
  } catch (error) {
    console.error(`Error fetching data:`, error);
  }
  

  useEffect(() => {
    (async () => {
      const askForPermission = await Notifications.requestPermissionsAsync({
        ios: {
          allowAlert: true,
          allowBadge: true,
          allowSound: true,
          allowAnnouncements: true,
        },
      });
      // await AsyncStorage.removeItem('hasOnboarded');
      // await AsyncStorage.removeItem('credentials');
    })();
  }, []);

  return (
    <OneHealSafeArea statusBar='light'>
      <View style={styles.container}>
        <OneHealAppBar />
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.news}>
            <FlatList
              data={dataNews}
              renderItem={({ item }) => (
                <NewsItem title={item.title} content={item.content} />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToAlignment='start'
              decelerationRate={'fast'}
              snapToInterval={Dimensions.get('window').width - 100}
              ListEmptyComponent={
                <ActivityIndicator animating color={darkGreen} size='large' />
              }
            />
          </View>
          <CTABig
            icon={'calendar'}
            text={t('Bookappointment')}
            style={styles.ctaBig}
            onPress={() => navigation.navigate('Root', { screen: 'TabOne' })}
          />
          <DoctorBanner
            doctor={{
              doctorName: DoctorNameUpcoming,
              date:moment(nearestAppointment?.startDate).format('DD-MM-YYYY HH:mm') ,
              image: require('../assets/images/doctor.png'),
              location: 'Home Visit',
            }}
            buttonLeft={{ button: t('Maps') }}
            topText={t('UpcomingAppointments')}
            buttonRight={{ button: t('Cancel') }}
            key={1}
          />

          <PillReminder />

          <DoctorBanner
            doctor={{
              doctorName: DoctorNameRecent,
              date:moment(lastAppointment?.startDate).format('DD-MM-YYYY HH:mm'),
              image: require('../assets/images/doctor2.png'),
              location: 'Home Visit',
            }}
            buttonLeft={{ button: t('Maps') }}
            topText={t('RecentAppointments')}
            buttonRight={{ button: t('SeeDetail') }}
            key={2}
          />
        </ScrollView>
      </View>
    </OneHealSafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  text: { paddingLeft: 10 },
  news: {
    height: 200,
    backgroundColor: darkGreen000,
    marginLeft: 20,
    padding: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 10,
  },
  ctaBig: { marginHorizontal: 20 },
});
