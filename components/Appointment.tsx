import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Avatar, Divider, Text } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { darkGreen } from '../sharedStyles';

const Appointment = () => {
  return (
    <View style={styles.appointment}>
      <View style={styles.appointmentTop}>
        <View>
          <Text variant='labelLarge' style={{ fontWeight: '500' }}>
            Dr. Kyle Bush
          </Text>
          <Text variant='labelSmall' style={{ opacity: 0.6 }}>
            Cardiology
          </Text>
        </View>
        <Avatar.Image source={require('../assets/images/avatar1.png')} />
      </View>
      <Divider />
      <View style={styles.appointmentBottomUp}>
        <Text style={{ marginRight: 15 }}>
          <Feather name='calendar' size={16} /> 19/01/2023
        </Text>

        <Text>
          <Feather name='clock' size={16} /> 10:30 AM
        </Text>
      </View>
      <View style={styles.appointmentBottomDown}>
        <TouchableOpacity style={styles.buttonReschedule}>
          <Text style={{ color: '#fff' }}>Reschedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCancel}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  appointment: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 15,
  },
  appointmentTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appointmentBottomUp: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  appointmentBottomDown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonCancel: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 7,
    width: '45%',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  buttonReschedule: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 7,
    width: '45%',
    alignItems: 'center',
    backgroundColor: darkGreen,
  },
});
