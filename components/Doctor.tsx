import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Avatar, Text } from 'react-native-paper';
import { darkGreen, darkGreen050 } from '../sharedStyles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  doctorId: number;
  name: string;
  specialization: string;
  locationId: number;
  styles?: ViewStyle;
  chosenLocation?: string;
  chosenLocationName?: string;
};

const Doctor = (props: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.doctor, props.styles]}
      onPress={() =>
        navigation.navigate('AppointmentStack', {
          screen: 'AppointmentScreen',
          params: {
            specialization: props.specialization,
            locationId: props.locationId,
            name: props.name,
            doctorId: props.doctorId,
            chosenLocation: props.chosenLocation,
            chosenLocationName: props.chosenLocationName,
          },
        })
      }
    >
      <View style={styles.doctorTexts}>
        <Text
          variant='labelLarge'
          style={{ color: darkGreen, fontWeight: '600' }}
        >
          {props.name}
        </Text>
        <Text variant='labelSmall' style={{ color: darkGreen, opacity: 0.8 }}>
          {props.specialization}
        </Text>
        <Text variant='labelSmall' style={{ color: darkGreen, opacity: 0.8 }}>
          {props.chosenLocationName}, {props.chosenLocation}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  doctor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: darkGreen050,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  doctorTexts: {
    marginLeft: 15,
  },
});
