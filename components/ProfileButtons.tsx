import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfileButton from './ProfileButton';

const ProfileButtons = () => {
  return (
    <>
      <ProfileButton icon='user' text='Personal Data' />
      <ProfileButton icon='calendar' text='Upcoming Appointments' />
      <ProfileButton icon='clock' text='Recent Appointments' />
      <ProfileButton icon='paperclip' text='Documents' />
    </>
  );
};

export default ProfileButtons;

const styles = StyleSheet.create({});
