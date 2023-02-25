import { useEffect } from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet } from 'react-native';
import CTABig from '../components/CTABig';
import DoctorBanner from '../components/DoctorBanner';
import NewsItem from '../components/NewsItem';
import OneHealAppBar from '../components/OneHealAppBar';
import OneHealSafeArea from '../components/OneHealSafeArea';
import { PillReminder } from '../components/PillReminder';
import * as Notifications from 'expo-notifications';

import { View } from '../components/Themed';
import { darkGreen000 } from '../sharedStyles';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'Second Item',
  },
];

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
export default function TabTwoScreen() {
  const navigation = useNavigation();

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
    })();
  }, []);

  return (
    <OneHealSafeArea statusBar='light'>
      <View style={styles.container}>
        <OneHealAppBar />
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.news}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <NewsItem title={item.title} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToAlignment='start'
              decelerationRate={'fast'}
              snapToInterval={Dimensions.get('window').width - 100}
            />
          </View>
          <CTABig
            icon={'calendar'}
            text='Book Appointment'
            style={styles.ctaBig}
            onPress={() => navigation.navigate('Root', { screen: 'TabOne' })}
          />
          <DoctorBanner
            doctor={{
              doctorName: 'Dr. Kyle Bush',
              date: 'Jan 20, 09:00 am',
              image: require('../assets/images/doctor.png'),
              location: 'Home Visit',
            }}
            buttonLeft={{ button: 'Maps' }}
            topText='Upcoming Appointments'
            buttonRight={{ button: 'Cancel' }}
            key={1}
          />

          <PillReminder />

          <DoctorBanner
            doctor={{
              doctorName: 'Dr. Riya Bush',
              date: 'Dec 16, 15:00 pm',
              image: require('../assets/images/doctor2.png'),
              location: 'Home Visit',
            }}
            buttonLeft={{ button: 'Maps' }}
            topText='Recent Appointments'
            buttonRight={{ button: 'See Detail' }}
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
    marginLeft: 10,
    padding: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 10,
  },
  ctaBig: { marginHorizontal: 10 },
});
