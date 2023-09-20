import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Text } from 'react-native-paper';
import { darkGreen100, darkGreen500 } from '../sharedStyles';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n';

type Props = {
  segment: string;
  setSegment: React.Dispatch<React.SetStateAction<string>>;
};

const OneHealSegmentedButtons = (props: Props) => {
  const segmentBgStyles = (selectedSegment: string) => {
    const segmentBgStyle: ViewStyle = {
      backgroundColor:
        props.segment === selectedSegment ? '34bccc' : 'rgba(0,0,0,0.1)',
    };
    return segmentBgStyle;
  };
  const segmentTextStyles = (selectedSegment: string) => {
    const segmentTextStyle: TextStyle = {
      color:
        props.segment === selectedSegment ? darkGreen100 : 'rgba(0,0,0,0.5)',
    };
    return segmentTextStyle;
  };
  const {t} = useTranslation();
  return (
    <View style={styles.buttons}>
      <TouchableOpacity
        style={[styles.button, styles.buttonLeft, segmentBgStyles('Upcoming')]}
        onPress={() => props.setSegment('Upcoming')}
      >
        <Text style={[styles.buttonText, segmentTextStyles('Upcoming')]}>
         { t("Upcoming")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonRight, segmentBgStyles('Recent')]}
        onPress={() => props.setSegment('Recent')}
      >
        <Text style={[styles.buttonText, segmentTextStyles('Recent')]}>
          {t("Recent")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OneHealSegmentedButtons;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
    backgroundColor: '#34bccc',
  },
  buttonLeft: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  buttonRight: {
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  buttonText: {
    fontWeight: '600',
    color: 'rgba(0,0,0,0.5)',
  },
});
