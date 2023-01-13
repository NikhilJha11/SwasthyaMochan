import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Avatar,
  Button,
  Divider,
  Menu,
  Text,
  useTheme,
} from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
  const [visible, setVisible] = useState(false);
  const insets = useSafeAreaInsets();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <OneHealSafeArea statusBar='light'>
      <View style={styles.container}>
        <View
          style={[
            styles.welcomer,
            { paddingTop: insets.top * 1.2, marginTop: -insets.top },
          ]}
        >
          <Avatar.Image source={require('../assets/images/avatar.jpg')} />

          <View style={{ backgroundColor: darkGreen }}>
            <Image
              source={require('../assets/images/logo-reverted.png')}
              style={{ width: 150, height: 50 }}
              resizeMode='contain'
            />
          </View>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Button onPress={openMenu} textColor='#fff'>
                <Ionicons name='earth' /> EN
              </Button>
            }
          >
            <Menu.Item onPress={() => {}} title='Item 1' />
            <Menu.Item onPress={() => {}} title='Item 2' />
          </Menu>
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
          <View style={styles.bookAppointment}>
            <TouchableOpacity style={styles.bookAppointmentButton}>
              <Feather
                name='calendar'
                color='rgba(255,255,255,0.8)'
                size={24}
              />
              <Text variant='headlineSmall' style={styles.bookAppointmentText}>
                Book Appointment
              </Text>
            </TouchableOpacity>
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
  },
  welcomer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: darkGreen,
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
  bookAppointment: {
    backgroundColor: darkGreen,

    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: 'center',
  },
  bookAppointmentText: {
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '600',
    marginLeft: 12,
  },
  bookAppointmentButton: {
    backgroundColor: darkGreen,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
