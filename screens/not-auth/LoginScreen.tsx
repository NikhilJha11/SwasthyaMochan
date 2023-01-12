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

const LoginScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
            <Image
              source={require('../../assets/images/logo-full-1.png')}
              resizeMode='contain'
              style={styles.image}
            />
            <Text
              variant='titleLarge'
              style={[styles.title, { color: theme.colors.tertiary }]}
            >
              LOGIN
            </Text>
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
            />
            <TextInput
              label='Password'
              mode='outlined'
              secureTextEntry={showPassword}
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
            />

            <Button
              mode='contained'
              style={styles.button}
              buttonColor={theme.colors.tertiary}
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
