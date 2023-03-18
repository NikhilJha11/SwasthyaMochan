import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import OneHealSafeArea from '../../components/OneHealSafeArea';
import { Button, useTheme } from 'react-native-paper';
import { lightGreen } from '../../sharedStyles';
import { StatusBar } from 'expo-status-bar';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const slides = [
  {
    id: '1',
    //image: require('../assets/images/Onboarding1.jpg'),
    image: require('../../assets/images/Onboarding1.jpg'),
  },
  {
    id: '2',
    image: require('../../assets/images/news.png'),
  },
  {
    id: '3',
    image: require('../../assets/images/design proposal.png'),
  },
  {
    id: '4',
    image: require('../../assets/images/upcom.png'),
  },
  {
    id: '5',
    image: require('../../assets/images/recent.png'),
  },
  {
    id: '6',
    image: require('../../assets/images/pill.png'),
  },
  {
    id: '7',
    image: require('../../assets/images/Onboardingappointmentssearch.jpg'),
  },
  {
    id: '8',
    image: require('../../assets/images/filter.png'),
  },
  {
    id: '9',
    image: require('../../assets/images/OnboardingLocations.jpg'),
  },
  {
    id: '10',
    image: require('../../assets/images/upcombut.png'),
  },
  {
    id: '11',
    image: require('../../assets/images/recentbut.png'),
  },
  {
    id: '12',
    image: require('../../assets/images/docbut.png'),
  },
  {
    id: '13',
  },
];
const OnboardingScreens = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const qc = useQueryClient();
  const handleFinish = useMutation({
    mutationKey: ['hasOnboarded'],
    mutationFn: async () => {
      await AsyncStorage.setItem('hasOnboarded', 'true');
    },
    onSuccess: () => qc.invalidateQueries(['hasOnboarded']),
  });

  const checkOnboardingStatus = async () => {
    const hasOnboarded = await AsyncStorage.getItem('hasOnboarded');
    if (hasOnboarded) {
      navigation.navigate('Root');
    }
  };
  React.useEffect(() => {
    checkOnboardingStatus();
  }, []);

  return (
    <Swiper showsButtons={true}>
      {slides.map((slide) => (
        <View key={slide.id} style={styles.slide}>
          <Image source={slide.image} style={styles.image} />

          {slide.id === '13' && (
            <Text
              style={styles.finishButton}
              onPress={() => handleFinish.mutate()}
            >
              <I18nextProvider i18n={i18n}>
                {' '}
                <Text>{t('Finish')}</Text>{' '}
              </I18nextProvider>
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
    resizeMode: 'contain',
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
    resizeMode: 'contain',
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
