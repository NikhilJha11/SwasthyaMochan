import { Feather, MaterialIcons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Avatar, Button, Text, useTheme } from 'react-native-paper';
import DoctorBanner from '../components/DoctorBanner';
import NewsItem from '../components/NewsItem';
import OneHealSafeArea from '../components/OneHealSafeArea';

import { View } from '../components/Themed';
import {
  darkGreen,
  darkGreen000,
  darkGreen400,
  darkGreen500,
  darkGreen600,
} from '../sharedStyles';

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
export default function TabTwoScreen() {
  const theme = useTheme();

  return (
    <OneHealSafeArea
      statusBar='dark'
      styles={{ borderWidth: 3, borderColor: 'blue' }}
    >
      <View style={styles.container}>
        <View style={styles.welcomer}>
          <Avatar.Image source={require('../assets/images/avatar.jpg')} />

          <View style={{ backgroundColor: darkGreen000 }}>
            <View
              style={{
                backgroundColor: darkGreen000,
                flexDirection: 'row',
                marginBottom: 5,
              }}
            >
              <Text variant='labelLarge' style={styles.text}>
                Welcome,
              </Text>
              <Text variant='labelLarge' style={{ fontWeight: '800' }}>
                {' '}
                Suat Bayrak
              </Text>
            </View>

            <View style={{ backgroundColor: darkGreen000 }}>
              <Text variant='labelSmall' style={styles.text}>
                You have 0 appointments
              </Text>
            </View>
          </View>
        </View>
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
          <DoctorBanner
            doctor={{
              doctorName: 'Dr. Kyle Bush',
              date: 'Jan 20, 09:00 am',
              image: require('../assets/images/doctor.png'),
              location: 'Home Visit',
            }}
            buttonLeft={{ button: 'Reschedule' }}
            topText='Upcoming Appointments'
            buttonRight={{ button: 'Cancel' }}
            key={1}
          />

          <DoctorBanner
            doctor={{
              doctorName: 'Dr. Riya Bush',
              date: 'Dec 16, 15:00 pm',
              image: require('../assets/images/doctor2.png'),
              location: 'Home Visit',
            }}
            buttonLeft={{ button: 'Reschedule' }}
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
    borderWidth: 1,
    borderColor: 'red',
  },
  welcomer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: darkGreen000,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.65,
    elevation: 5,
    zIndex: 3,
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
});
