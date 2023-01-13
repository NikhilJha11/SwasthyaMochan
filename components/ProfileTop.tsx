import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Avatar, Text } from 'react-native-paper';
import { darkGreen } from '../sharedStyles';

const ProfileTop = () => {
  return (
    <View style={styles.topSection}>
      <Text
        variant='titleMedium'
        style={{ fontWeight: '700', marginBottom: 30 }}
      >
        PROFILE
      </Text>
      <Avatar.Image source={require('../assets/images/avatar.jpg')} />
      <Text variant='titleMedium' style={styles.textName}>
        Suat Bayrak
      </Text>
      <Text variant='bodySmall' style={styles.textEmail}>
        suatbayrak@oneheal.com
      </Text>
    </View>
  );
};

export default ProfileTop;

const styles = StyleSheet.create({
  topSection: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginBottom: 40,
  },
  textName: { marginTop: 5, color: darkGreen },
  textEmail: { color: darkGreen },
});
