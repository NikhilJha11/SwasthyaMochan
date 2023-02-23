import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import OneHealSafeArea from '../components/OneHealSafeArea';
import { MaterialIcons } from '@expo/vector-icons';
import { Searchbar, Text } from 'react-native-paper';
import CTABig from '../components/CTABig';

const Chat = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);
  return (
    <OneHealSafeArea statusBar='dark'>
      <Text>hi</Text>
    </OneHealSafeArea>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: { flex: 1, borderWidth: 2, borderColor: 'red' },
  chat: {
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 15,
  },
  chatRight: {
    paddingLeft: 10,
  },
  img: {
    width: 54,
    height: 54,
    borderRadius: 50,
  },
});
