import {
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Avatar, Divider, Text } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { darkGreen } from '../sharedStyles';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n';   //used for internalization
import { useDeleteAppointment } from '../hooks/useDeleteAppointment';
import { usePatientsAppointments } from '../hooks/usePatient';
import moment from 'moment';
import { useLocations } from '../hooks/useLocations';
import { useDoctorsByLocation } from '../hooks/useDoctorsbyLocation';

type Props = {
  name: string;
  spec: string;
};
const Appointment = (props: Props) => {
  //The Appointment component takes two props: name and spec, which presumably represent the 
  //name and specialization of a medical appointment.
  const openGps = (lat: any, lng: any) => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`
    );
    //The openGps function uses the Linking.openURL method to open a map URL with latitude and 
    //longitude coordinates when called. This is typically used to show the location of an appointment on a map application.
//It uses the useTranslation hook from react-i18next to access 
  };
  const { t } = useTranslation();
  //It uses the useTranslation hook from react-i18next to access translation functions (t) for internationalization.

  return (
    <View style={styles.appointment}>
      <View style={styles.appointmentTop}> {/* It displays the name and specialization of the appointment. */}
        <View>
          <Text
            variant='labelLarge'
            style={{ fontWeight: '500', marginBottom: 5 }}
          >
            {props.name}
          </Text>
          <Text variant='labelSmall' style={{ opacity: 0.6 }}>
            {props.spec}
          </Text>
        </View>
      </View>
      <Divider />
       <View style={styles.appointmentBottomUp}>  {/*It shows the current date and time (though it currently always displays the current date). */}
        <Text style={{ marginRight: 15 }}>
          <Feather name='calendar' size={16} /> {new Date().toISOString()}
        </Text>

        <Text>
          <Feather name='clock' size={16} />
        </Text>
      </View>
      <View style={styles.appointmentBottomDown}>  {/* It provides buttons for actions like opening maps and canceling the appointment. */}
        <TouchableOpacity
          style={styles.buttonReschedule}
          onPress={() => openGps('50.964265277365115', '11.042652780566502')}
        >
          <Text style={{ color: '#fff' }}>{t('Maps')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCancel}>
          <Text>{t('Cancel')}</Text>
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
    shadowColor: 'rgba(0,0,0,0.3)', //'rgba(0,0,0,0.3)'
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

// Breaking down the 'rgba(0,0,0,0.3)' value:

// 0,0,0: These are the RGB (Red, Green, Blue) values, where 0 for each means no color 
//contribution, resulting in black. 0.3: This is the alpha (transparency) value, which ranges from 0 
//(completely transparent) to 1 (completely opaque). In this case, 0.3 indicates a slight transparency, 
//making the shadow somewhat see-through. So, 'rgba(0,0,0,0.3)' represents a mostly black shadow with
// a slight degree of transparency. You can adjust the RGB values and the alpha value to change the 
//color and transparency of the shadow according to your design requirements.