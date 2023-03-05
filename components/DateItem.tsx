import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { darkGreen, darkGreen400 } from '../sharedStyles';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Button, Chip, Dialog, Portal, Text } from 'react-native-paper';
import { I18nextProvider, useTranslation } from 'react-i18next';

type Time = {
  formattedTime: string;
  timeSlotId: number;
};
type Props = {
  day: string;
  date: string;
  time: Time[];
  setTime: React.Dispatch<React.SetStateAction<string>>;
  doctor: string;
  choosenDay: string;
  choosenDate: string;
  setChoosenDay: React.Dispatch<React.SetStateAction<string>>;
  setChoosenDate: React.Dispatch<React.SetStateAction<string>>;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
  chosenTimeSlotId: number;
  setChosenTimeSlotId: React.Dispatch<React.SetStateAction<number>>;
};

const DateItem = (props: Props) => {
  const [showTime, setShowTime] = useState(false);
  const { t } = useTranslation();

  const FULL_MONTHS = [
    t('January'),
    t('February'),
    t('March'),
    t('April'),
    t('May'),
    t('June'),
    t('July'),
    t('August'),
    t('September'),
    t('October'),
    t('November'),
    t('December'),
  ];
  const FULL_WEEK = [
    t('Sunday'),
    t('Monday'),
    t('Tuesday'),
    t('Wednesday'),
    t('Thursday'),
    t('Friday'),
    t('Saturday'),
  ];

  const setDateAndAppointment = ({
    timeSlotId,
    formattedTime,
  }: {
    timeSlotId: number;
    formattedTime: string;
  }) => {
    props.setVisible(true);
    props.setChosenTimeSlotId(timeSlotId);
    props.setChoosenDay(
      `${new Date(props.date).getDate()} ${
        FULL_MONTHS[new Date(props.date).getMonth()]
      }, ${FULL_WEEK[new Date(props.date).getDay()]} at ${formattedTime}`
    );
    props.setChoosenDate(`${formattedTime}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowTime(!showTime)}
      >
        <Text style={{ color: darkGreen, fontWeight: '500' }}>
          {new Date(props.date).getDate()}{' '}
          {FULL_MONTHS[new Date(props.date).getMonth()]}
          {', '}
          {FULL_WEEK[new Date(props.date).getDay()]}
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
                  onPress={() =>
                    setDateAndAppointment({
                      timeSlotId: t.timeSlotId,
                      formattedTime: t.formattedTime,
                    })
                  }
                  selected={
                    props.chosenTimeSlotId === t.timeSlotId && props.visible
                  }
                >
                  {t.formattedTime}
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
