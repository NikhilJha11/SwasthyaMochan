import {  Image,StyleSheet, View } from 'react-native';
import React from 'react';
import {  Text } from 'react-native-paper';
import { darkGreen } from '../sharedStyles';

const ProfileTop = () => {
  return (
    <View style={styles.topSection}>
      
      <Image source={require('../assets/images/logo-full-1.png')}style={{ marginBottom: 0,marginVertical:40}}/>
      <Text style={{ fontWeight: '700', marginBottom: 10, fontSize:25 }}>

        PROFILE
      </Text>
 
        {/*  <Text variant='titleMedium' style={styles.textName}>
        Suat Bayrak
      </Text>
      <Text variant='bodySmall' style={styles.textEmail}>
        suatbayrak@oneheal.com
      </Text>*/}
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
