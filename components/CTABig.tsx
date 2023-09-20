//The code you provided defines a React Native component called CTABig (Call to Action Big) that creates a customizable button with 
//an icon and text. This component accepts several props to customize its appearance and behavior. Here's a breakdown of the code:

// This component provides a reusable and customizable button for various actions in your app, such as
// booking appointments, and allows you to easily change its appearance and behavior by adjusting the props.
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';import React from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Text } from 'react-native-paper';
import { darkGreen } from '../sharedStyles';

type Props = {
  icon: any;  //Specifies the icon for the button.
  text: string;  //Specifies the text to display alongside the icon.
  style?: ViewStyle; //Allows custom styling of the button.
  onPress?: () => void;  // Defines a callback function to execute when the button is pressed.
};

const CTABig = (props: Props) => {
  return (
    <View style={[styles.bookAppointment, props.style]}>
      {/* styles.bookAppointment defines the styling for the button container. It includes background
      color, border radius, padding, shadow properties for elevation, and  alignment.*/}
      <TouchableOpacity
        style={styles.bookAppointmentButton}
        // styles.bookAppointmentButton styles the button's inner container, which holds the icon and 
        //text. It sets the background color, flex direction, and alignment.
        onPress={props.onPress}
      >
        {props.icon === 'calendar' ? (
          <Feather name={props.icon} color='rgba(255,255,255,0.8)' size={24} /> //white color
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
    backgroundColor: '#34BCCC',
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
    backgroundColor: '#34BCCC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    width: '100%',
  },
});







