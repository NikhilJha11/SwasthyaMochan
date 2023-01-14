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
import CTABig from '../components/CTABig';
import DoctorBanner from '../components/DoctorBanner';
import NewsItem from '../components/NewsItem';
import OneHealAppBar from '../components/OneHealAppBar';
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
          />
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
