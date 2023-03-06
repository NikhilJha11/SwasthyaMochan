import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import OneHealSafeArea from '../components/OneHealSafeArea';
import { MaterialIcons } from '@expo/vector-icons';
import { Searchbar, Text, TextInput } from 'react-native-paper';
import CTABig from '../components/CTABig';
import { useNavigation } from '@react-navigation/native';
import {
  darkGreen,
  darkGreen000,
  darkGreen050,
  darkGreen300,
  darkGreen600,
} from '../sharedStyles';

const chats2 = [
  {
    chatId: 0,
    messageFrom: 'davide',
    messageTo: 'suat',
    message: 'hello!',
  },
  {
    chatId: 0,
    messageFrom: 'davide',
    messageTo: 'suat',
    message: 'are you there ?',
  },
  {
    chatId: 0,
    messageFrom: 'suat',
    messageTo: 'davide',
    message: 'im here, whats up ?',
  },
  {
    chatId: 0,
    messageFrom: 'davide',
    messageTo: 'suat',
    message: 'this is a great app',
  },
];

const user = 'suat';

const Chat = () => {
  const navigation = useNavigation();
  const [chats, setChats] = useState(chats2);
  const [textInput, setTextInput] = useState('');
  console.log('textInput is ', textInput);
  const scrollViewRef = useRef<any>(null);

  const chatFromOtherPerson = (text: string, key: number, date?: string) => (
    <View style={styles.chat} key={key}>
      <Text style={styles.text}>{text}</Text>
      <Text style={[styles.date, { textAlign: 'right' }]}>
        23.02.2023, 17:00
      </Text>
    </View>
  );

  const chatFromMe = (text: string, key: number, date?: string) => (
    <View
      style={[
        styles.chat,
        {
          backgroundColor: darkGreen050,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 0,
        },
      ]}
      key={key}
    >
      <Text style={[styles.text, { color: '#000', textAlign: 'right' }]}>
        {text}
      </Text>
      <Text style={[styles.date, { color: '#000', textAlign: 'left' }]}>
        23.02.2023, 19:00
      </Text>
    </View>
  );

  const sendMessage = (message: string) => {
    // chatId will come from navigation params
    let chat = {
      chatId: 0,
      messageFrom: user,
      messageTo: 'suat',
      message: message,
    };
    setChats((previous) => {
      return [...previous, chat];
    });
    setTextInput('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <OneHealSafeArea statusBar='dark'>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name='arrow-back' size={34} color={'#fff'} />
            </TouchableOpacity>
            <View style={styles.person}>
              <Image
                source={require('../assets/images/avatar5.png')}
                style={styles.img}
              />
              <View>
                <Text variant='titleMedium' style={{ color: '#fff' }}>
                  Davide Garofoli
                </Text>
              </View>
            </View>
          </View>
          <ScrollView
            style={styles.chats}
            ref={scrollViewRef}
            onContentSizeChange={() => {
              scrollViewRef?.current?.scrollToEnd();
            }}
          >
            {chats.map((chat, index) => {
              if (chat.messageFrom === user) {
                return chatFromMe(chat.message, index);
              } else if (chat.messageFrom !== user) {
                return chatFromOtherPerson(chat.message, index);
              }
            })}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: 5,
          }}
        >
          <TextInput
            style={{ flex: 1 }}
            value={textInput}
            onChangeText={(text) => setTextInput(text)}
          />
          <TouchableOpacity
            style={{
              borderRadius: 50,
              padding: 5,
              backgroundColor: darkGreen,
            }}
            onPress={() => sendMessage(textInput)}
          >
            <MaterialIcons name='send' size={24} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </OneHealSafeArea>
    </KeyboardAvoidingView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatRight: {
    paddingLeft: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  topSection: {
    flexDirection: 'row',
    backgroundColor: darkGreen600,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  person: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  chats: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  chat: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    marginBottom: 10,
    color: '#fff',
  },
  date: {
    fontSize: 10,
    opacity: 0.6,
    color: '#fff',
  },
});
