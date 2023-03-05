import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import {
  darkGreen,
  darkGreen000,
  darkGreen200,
  darkGreen300,
  darkGreen400,
} from '../sharedStyles';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Button, Chip, Dialog, Portal, Text } from 'react-native-paper';

type Props = {
  day: string;
  date: string;
  time: string[];
  setTime: React.Dispatch<React.SetStateAction<string>>;
  doctor: string;
  confirmAppointment: (data: {
    time: string;
    day: string;
    date: string;
  }) => void;
  choosenDay: string;
  choosenDate: string;
  setChoosenDay: React.Dispatch<React.SetStateAction<string>>;
  setChoosenDate: React.Dispatch<React.SetStateAction<string>>;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
};

const DateItem = (props: Props) => {
  const [showTime, setShowTime] = useState(false);

  const setDateAndAppointment = ({
    time,
    day,
    date,
  }: {
    time: string;
    day: string;
    date: string;
  }) => {
    props.setVisible(true);
    props.setChoosenDate(date);
    props.setChoosenDay(day);
    props.setTime(time);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowTime(!showTime)}
      >
        <Text style={{ color: darkGreen, fontWeight: '500' }}>
          {props.day} {props.date}
        </Text>
        <MaterialIcons
          name={`keyboard-arrow-${showTime ? 'up' : 'down'}`}
          size={24}
        />
      </TouchableOpacity>
      {showTime ? (
        <View style={styles.chipContainer}>
          {props.time
            ? props.time.map((t, index) => (
                <Chip
                  style={styles.chip}
                  textStyle={{ color: '#fff' }}
                  key={index}
                  // onPress={() =>
                  //   setDateAndAppointment({
                  //     time: '08:00',
                  //     day: props.day,
                  //     date: props.date,
                  //   })
                  // }
                  // selected={
                  //   props.time === '08:00' &&
                  //   props.date === props.choosenDate &&
                  //   props.visible
                  // }
                >
                  {t}
                </Chip>
              ))
            : null}
        </View>
      ) : null}
    </View>
  );
};

export default DateItem;

const styles = StyleSheet.create({
  chip: {
    margin: 5,
    paddingVertical: 7,
    paddingHorizontal: 14,
    backgroundColor: darkGreen400,
  },
  container: {
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 5,
    paddingVertical: 5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
  },
});
