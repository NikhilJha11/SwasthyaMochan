import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfileButton from './ProfileButton';
import { useNavigation } from '@react-navigation/native';

const ProfileButtons = () => {
  const navigation = useNavigation();
  return (
    <>
      <ProfileButton icon='user' text='Personal Data' />
      <ProfileButton
        icon='calendar'
        text='Upcoming Appointments'
        onPress={() =>
          navigation.navigate('AppointmentStack', {
            screen: 'AppointmentsScreen',
          })
        }
      />
      <ProfileButton icon='clock' text='Recent Appointments' />
      <ProfileButton icon='paperclip' text='Documents' />
      <ProfileButton 
      icon='clipboard' 
      text='Patient Profile'
      onPress={() =>
        navigation.navigate('NotAuth', { screen: 'PrivacyStatmentScreen'})
      }
       /> 
    </>
  );
};

export default ProfileButtons;

const styles = StyleSheet.create({});
