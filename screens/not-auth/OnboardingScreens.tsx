import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import OneHealSafeArea from '../../components/OneHealSafeArea';
import { Button, useTheme } from 'react-native-paper';
import { lightGreen } from '../../sharedStyles';
import { StatusBar } from 'expo-status-bar';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';



const slides = [
  {
    id: '1',
    //image: require('../assets/images/Onboarding1.jpg'),
    image: require('../../assets/images/Onboarding1.jpg'),

  },
  {
    id: '2',
    image: require('../../assets/images/Onboarding1news.jpg'),
   
  
  },
  {
    id: '3',
    image: require('../../assets/images/Onboarding1_BookAppointment.jpg'),

  },
  {
    id: '4',
    image: require('../../assets/images/Onboarding1upcomming.jpg'),


  },
  {
    id: '5',
    image: require('../../assets/images/Onboarding1_recent_E.jpg'),


  },
  {
    id: '6',

  },
];
const OnboardingScreens = () => {
  const navigation = useNavigation();
  const handleFinish = async () => {
    await AsyncStorage.setItem('hasOnboarded', 'true');
    navigation.navigate('Root');
  };

  /*const checkOnboardingStatus = async () => {
    const hasOnboarded = await AsyncStorage.getItem('hasOnboarded');
    if (hasOnboarded) {
      navigation.navigate('Root');
    }
  };
  React.useEffect(() => {
    checkOnboardingStatus();
  }, []);*/

  return (
    <Swiper showsButtons={true}>
      {slides.map((slide) => (
        <View key={slide.id} style={styles.slide}>
          <Image source={slide.image} style={styles.image} />
          
          {slide.id === '6' && (
            <Text style={styles.finishButton} onPress={handleFinish}>
              Finish
            </Text>
          )}
        </View>
      ))}
    </Swiper>
  );
};

export default OnboardingScreens;

const styles = StyleSheet.create({
  imageBackground: { flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 5,
    marginBottom: 30,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 430,
    height: 820,
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 32,
  },
  finishButton: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 300,
    color: '#007AFF',
  },
});
