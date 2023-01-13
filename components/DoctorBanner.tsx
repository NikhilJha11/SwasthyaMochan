import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { darkGreen, darkGreen000, darkGreen500 } from '../sharedStyles';
import { Text } from 'react-native-paper';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageProps } from 'react-native';

type Button = {
  button: string;
  buttonPress?: () => void;
};
type Doctor = {
  doctorName: string;
  date: string;
  location: string;
  image: ImageSourcePropType;
};

type Props = {
  topText: string;
  buttonLeft: Button;
  buttonRight: Button;
  doctor: Doctor;
};

const DoctorBanner = (props: Props) => {
  return (
    <View style={styles.appointments}>
      <View style={styles.appointmentsTopSection}>
        <Text style={styles.appointmentsTopSectionText}>{props.topText}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingVertical: 5,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: darkGreen500,
          }}
        >
          <Text
            style={{ color: darkGreen, opacity: 0.7, marginRight: 5 }}
            variant='labelSmall'
          >
            See All
          </Text>
          <Feather name='arrow-right' />
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback
        style={styles.appointmentsBottomSection}
        onPress={() => console.log('hi')}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            position: 'relative',
          }}
        >
          <LinearGradient
            colors={[darkGreen, darkGreen500]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.7, y: 0 }}
            style={styles.appointmentsBottomSectionContainer}
          >
            <View style={styles.appointmentsBottomSectionLeft}>
              <Text style={styles.doctorText} variant='labelLarge'>
                {props.doctor.doctorName}
              </Text>
              <Text style={styles.textColor} variant='labelMedium'>
                {props.doctor.date}
              </Text>
              <Text style={styles.textColor} variant='labelMedium'>
                <MaterialIcons name='home-filled' />
                {props.doctor.location}
              </Text>
              <View style={styles.appointmentsBottomSectionLeftButtons}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    marginRight: 15,
                  }}
                >
                  <Text style={{ color: darkGreen }} variant='labelSmall'>
                    {props.buttonLeft.button}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ color: darkGreen }} variant='labelSmall'>
                    {props.buttonRight.button}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.appointmentsBottomSectionRight}>
            <Image
              source={props.doctor.image}
              style={{ width: 130, height: 200 }}
              resizeMode='contain'
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default DoctorBanner;

const styles = StyleSheet.create({
  appointments: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginTop: 10,
    position: 'relative',
    backgroundColor: darkGreen000,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 40,
  },
  appointmentsTopSection: {
    backgroundColor: darkGreen000,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  appointmentsTopSectionText: {
    fontWeight: '800',
    color: darkGreen,
    opacity: 0.8,
  },
  appointmentsBottomSection: {
    backgroundColor: darkGreen000,
    position: 'relative',
    zIndex: 2,
  },
  appointmentsBottomSectionContainer: {
    backgroundColor: darkGreen,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    position: 'relative',
    marginTop: 20,
  },

  appointmentsBottomSectionLeft: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    flex: 2,
  },
  appointmentsBottomSectionRight: {
    flex: 1,
    position: 'absolute',
    top: -10,
    right: 5,
    backgroundColor: 'transparent',
  },
  doctorText: {
    fontWeight: '800',
    color: '#fff',
    marginBottom: 10,
    opacity: 0.8,
  },
  textColor: {
    color: '#fff',
    fontWeight: '300',
    opacity: 0.8,
    marginBottom: 2,
  },

  appointmentsBottomSectionLeftButtons: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: 24,
  },
});
