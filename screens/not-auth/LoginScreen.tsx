import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { darkGreen, darkGreen1, sharedStyles } from '../../sharedStyles';
import { Button, TextInput, Text } from 'react-native-paper';
import OneHealSafeArea from '../../components/OneHealSafeArea';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      keyboardVerticalOffset={-20}
    >
      <OneHealSafeArea statusBar='dark' styles={{ flex: 1 }}>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ flex: 1, borderWidth: 5, borderColor: 'red' }}
        >
          <View style={styles.container}>
            <Image
              source={require('../../assets/images/logo-full-1.png')}
              resizeMode='contain'
              style={styles.image}
            />
            <TextInput
              label='Email'
              placeholder='example@email.com'
              mode='outlined'
              style={styles.input}
              outlineColor={darkGreen1}
              activeOutlineColor={darkGreen}
            />
            <TextInput
              label='Password'
              mode='outlined'
              secureTextEntry
              style={styles.input}
              outlineColor={darkGreen1}
              activeOutlineColor={darkGreen}
              right={<TextInput.Icon icon='eye' />}
            />

            <Button loading mode='elevated' style={{ paddingVertical: 7 }}>
              LOGIN
            </Button>
            <View style={styles.register}>
              <Text variant='labelMedium'>Don't have an account? </Text>
              <Button mode='text' textColor='#000'>
                Register here!
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </OneHealSafeArea>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'blue',
    backgroundColor: sharedStyles.viewStyles.backgroundColor,
    paddingHorizontal: sharedStyles.viewStyles.paddingHorizontal,
    paddingBottom: 20,
  },
  image: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: sharedStyles.viewStyles.backgroundColor,
  },
  input: {
    backgroundColor: sharedStyles.viewStyles.backgroundColor,
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    marginBottom: 40,
  },
  keyboard: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  register: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
