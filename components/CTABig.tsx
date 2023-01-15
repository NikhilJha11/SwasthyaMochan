import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Text } from 'react-native-paper';
import { darkGreen } from '../sharedStyles';

type Props = {
  icon: any;
  text: string;
  style?: ViewStyle;
  onPress?: () => void;
};

const CTABig = (props: Props) => {
  return (
    <View style={[styles.bookAppointment, props.style]}>
      <TouchableOpacity
        style={styles.bookAppointmentButton}
        onPress={props.onPress}
      >
        {props.icon === 'calendar' ? (
          <Feather name={props.icon} color='rgba(255,255,255,0.8)' size={24} />
        ) : (
          <MaterialIcons
            name={props.icon}
            color='rgba(255,255,255,0.8)'
            size={24}
          />
        )}
        <Text variant='headlineSmall' style={styles.bookAppointmentText}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CTABig;

const styles = StyleSheet.create({
  bookAppointment: {
    backgroundColor: darkGreen,
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
    justifyContent: 'center',
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
    justifyContent: 'center',
    zIndex: 2,
    width: '100%',
  },
});
