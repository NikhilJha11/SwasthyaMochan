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
import i18n from '../i18n';
import { useDeleteAppointment } from '../hooks/useDeleteAppointment';
import { usePatientsAppointments } from '../hooks/usePatient';
import moment from 'moment';
import { useLocations } from '../hooks/useLocations';
import { useDoctorsByLocation } from '../hooks/useDoctorsbyLocation';
const Appointment = () => {
  const openGps = (lat: any, lng: any) => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`
    );
  };
  const { t } = useTranslation(); 

let DoctorNameUpcoming;
let DoctorSpecialization;
  const deleteAppointment = useDeleteAppointment();
  const patientid = 1
  const { data: patientsAppointments } = usePatientsAppointments({
    patientid: patientid,
  }); 
  const upcomingAppointments = patientsAppointments.filter((appointment) => {
    const appointmentDate = new Date(appointment.startDate);
    return appointmentDate >= new Date();
  }).sort((a, b) => {
    const aDate = new Date(a.startDate);
    const bDate = new Date(b.startDate);
    return aDate - bDate;
  });
  const firstUpcomingAppointment = upcomingAppointments[0];
  console.log (firstUpcomingAppointment)
  const doctorIdToFindUpcoming = firstUpcomingAppointment?.doctorId;


  const { data: locations } = useLocations();

  const doctorsByLocation = {};
  
  locations?.forEach((location) => {
    try {
      const { doctors } = useDoctorsByLocation(location.locationId);
      if (doctors) {
        doctorsByLocation[location.locationId] = doctors;
      }
    } catch (error) {
      console.error(`Error fetching doctors for location ${location.locationId}:`, error);
    }
  });

  const filteredDoctors = Object.values(doctorsByLocation).reduce((acc, doctors) => {
    try {
      const matchingDoctors = doctors.filter((doctor) => doctor.doctorId === doctorIdToFindUpcoming);
      return [...acc, ...matchingDoctors];
    } catch (error) {
      console.error(`Error filtering doctors:`, error);
      return acc;
    }
  }, []);
  DoctorNameUpcoming = filteredDoctors[0]?.name
  DoctorSpecialization = filteredDoctors[0]?.specialization
  console.log(filteredDoctors[0]?.specialization)


  return ( 
    <View style={styles.appointment}>
      <View style={styles.appointmentTop}>
        <View>
          <Text
            variant='labelLarge'
            style={{ fontWeight: '500', marginBottom: 5 }}
          >
            {DoctorNameUpcoming}
          </Text>
          <Text variant='labelSmall' style={{ opacity: 0.6 }}>
          {DoctorSpecialization}
          </Text>
        </View>
      </View>
      <Divider />
      <View style={styles.appointmentBottomUp}>
        <Text style={{ marginRight: 15 }}>
          <Feather name='calendar' size={16} /> {moment(firstUpcomingAppointment?.startDate).format('DD-MM-YYYY HH:mm')}
        </Text>

        <Text>
          <Feather name='clock' size={16} /> 
        </Text>
      </View>
      <View style={styles.appointmentBottomDown}>
        <TouchableOpacity
          style={styles.buttonReschedule}
          onPress={() => openGps('50.964265277365115', '11.042652780566502')}
        >
          <Text style={{ color: '#fff' }}>{t("Maps")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCancel}>
          <Text>{t("Cancel")}</Text>
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
