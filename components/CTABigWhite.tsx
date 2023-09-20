// The code you provided defines a React Native component called CTABigWhite, which is similar to the
// previously mentioned CTABig component but with a different visual style. This component creates a 
//customizable button with an icon and text.

//This component takes our blue color as our icon

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

const CTABigWhite = (props: Props) => {
  return (
    <View style={[styles.bookAppointment, props.style]}>
      
      <TouchableOpacity
        style={styles.bookAppointmentButton}
        
        onPress={props.onPress}
      >
        {props.icon === 'calendar' ? (
          <Feather name={props.icon} color={'#34bccc'} size={24} />
        ) : (
          <MaterialIcons name={props.icon} color={'#34bccc'} size={24} />
        )}
        <Text variant='headlineSmall' style={styles.bookAppointmentText}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CTABigWhite;

const styles = StyleSheet.create({
  bookAppointment: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
    width: '100%',
  },
  bookAppointmentText: {
    color: '#34BCCC',
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
