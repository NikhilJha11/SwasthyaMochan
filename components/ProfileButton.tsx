import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Text } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { darkGreen, darkGreen000 } from '../sharedStyles';

type Props = {
  icon: any;
  text: string;
  onPress?: () => void;
};

const ProfileButton = (props: Props) => {  //container for the icons of the textsa used in the Profile screen
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Feather name={props.icon} color={'#fcb36a'} size={24} />
      <Text variant='titleMedium' style={styles.buttonText}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: darkGreen000,
    paddingVertical: 30,
    paddingHorizontal: 15,
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
    marginBottom: 20,
  },
  buttonText: { color: '#24869e', fontWeight: '700', marginLeft: 30 },
});
