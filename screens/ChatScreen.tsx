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
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigation = useNavigation();

  const onChangeSearch = (query: string) => setSearchQuery(query);
  return (
    <OneHealSafeArea statusBar='dark'>
      <View style={{ paddingHorizontal: 20 }}>
        <Text variant='headlineMedium'>Chat</Text>
        <Searchbar
          placeholder='Search'
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <CTABig
        icon={'chat-bubble-outline'}
        text='Start Chat'
        onPress={() => console.log('')}
        style={{ marginHorizontal: 20, marginVertical: 40 }}
      />
      <View style={styles.chat}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => navigation.navigate('ChatStack', { screen: 'Chat' })}
        >
          <Image
            source={require('../assets/images/Dr.-Harshul.png')}
            style={styles.img}
          />
          <View style={styles.chatRight}>
            <Text variant='titleMedium'>Dr. Harshul</Text>
            <Text variant='bodySmall' numberOfLines={4}>
              Click to consult an experienced doctor
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </OneHealSafeArea>
  );
};

export default ChatScreen;

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
