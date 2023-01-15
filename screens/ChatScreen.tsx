import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ChatScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../assets/images/splash.png')}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
