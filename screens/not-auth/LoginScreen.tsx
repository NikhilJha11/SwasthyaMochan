import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { darkGreen, sharedStyles } from '../../sharedStyles';
import { Button, TextInput, Text, useTheme } from 'react-native-paper';
import OneHealSafeArea from '../../components/OneHealSafeArea';
import { useNavigation } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { getItem, setItem, removeItem } = useAsyncStorage('credentials');

  const login = async (email = 'admin@example.com', password = '123123') => {
    try {
      setLoading(true);
      await setItem(JSON.stringify({ email, password }));

      new Promise(() =>
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('Root');
        }, 2000)
      );
    } catch (e) {
      console.log('error is ,', e);
      setLoading(false);
    }
  };

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
          style={{ flex: 1 }}
        >
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <Image
                source={require('../../assets/images/logo-3x.png')}
                resizeMode='contain'
                style={styles.image}
              />
              <Text
                variant='headlineLarge'
                style={[styles.title, { color: theme.colors.tertiary }]}
              >
                LOGIN
              </Text>
            </View>

            <TextInput
              label='Email'
              placeholder='example@email.com'
              mode='outlined'
              style={styles.input}
              outlineColor={darkGreen}
              activeOutlineColor={darkGreen}
              autoCapitalize='none'
              value={email}
              onChangeText={(text) => setEmail(text)}
              textContentType='emailAddress'
            />
            <TextInput
              label='Password'
              mode='outlined'
              secureTextEntry={!showPassword}
              style={styles.input}
              outlineColor={darkGreen}
              activeOutlineColor={darkGreen}
              right={
                <TextInput.Icon
                  icon={`eye${showPassword ? '-off' : ''}`}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              autoCapitalize='none'
              value={password}
              onChangeText={(text) => setPassword(text)}
              textContentType='password'
            />

            <Button
              mode='contained'
              style={styles.button}
              buttonColor={theme.colors.tertiary}
              onPress={() => login(email, password)}
              loading={loading}
            >
              LOGIN
            </Button>
            <View style={styles.register}>
              <Text variant='labelMedium'>Don't have an account? </Text>
              <Button
                mode='text'
                textColor={theme.colors.tertiary}
                onPress={() =>
                  navigation.navigate('NotAuth', { screen: 'RegisterScreen' })
                }
              >
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
    paddingHorizontal: sharedStyles.viewStyles.paddingHorizontal,
    paddingBottom: 20,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    flex: 1,
  },
  safeAreaContainer: {
    flex: 1,
  },
  input: {
    backgroundColor: sharedStyles.viewStyles.backgroundColor,
    padding: 10,
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
    paddingTop: 10,
  },
  button: {
    paddingVertical: 5,
  },
  title: {
    paddingBottom: 20,
    fontWeight: '600',
  },
});
