import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { darkGreen, sharedStyles } from '../../sharedStyles';
import { Button, TextInput, Text, useTheme } from 'react-native-paper';
import OneHealSafeArea from '../../components/OneHealSafeArea';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

const RegisterScreen = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [birthdate, setBirthdate] = useState('');

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
          <ScrollView style={styles.container}>
            <Image
              source={require('../../assets/images/logo-full-1.png')}
              resizeMode='contain'
              style={styles.image}
            />
            <Text
              variant='titleLarge'
              style={[styles.title, { color: theme.colors.tertiary }]}
            >
              REGISTER
            </Text>
            <TextInput
              label='Name'
              placeholder='name'
              left={<TextInput.Icon icon={'account-circle'}/>}
              mode='outlined'
              style={styles.input}
              outlineColor={darkGreen}
              activeOutlineColor={darkGreen}
              autoCapitalize='none'
            />
             <TextInput
              label='Surname'
              placeholder='surname'
              mode='outlined'
              left={<TextInput.Icon icon={'account-circle'}/>}
              secureTextEntry
              style={styles.input}
              outlineColor={darkGreen}
              activeOutlineColor={darkGreen}
              autoCapitalize='none'
            />
            <TextInput
              label='Date of Birth'
              mode='outlined'
              left={<TextInput.Icon icon='calendar'/>}
              placeholder={`YYYY-MM-DD (e.g. ${moment().subtract(18, 'years').format('YYYY-MM-DD')})`}
              value={birthdate}
              onChangeText={(text) => setBirthdate(text)}
              style={styles.input}
              outlineColor={darkGreen}
              activeOutlineColor={darkGreen}
              autoCapitalize='none'
            />
            <TextInput
              label='Street'
              mode='outlined'
              left={<TextInput.Icon icon={'map-marker-account'}/>}
              style={styles.input}
              outlineColor={darkGreen}
              activeOutlineColor={darkGreen}
              autoCapitalize='none'
            />
            
             <TextInput
              label='Zip'
              mode='outlined'
              left={<TextInput.Icon icon={'home-city'}/>}
              style={styles.input}
              outlineColor={darkGreen}
              activeOutlineColor={darkGreen}
              autoCapitalize='none'
            />
             <TextInput
              label='City'
              mode='outlined'
              left={<TextInput.Icon icon={'home-city'}/>}
              style={styles.input}
              outlineColor={darkGreen}
              activeOutlineColor={darkGreen}
              autoCapitalize='none'
            />
            <TextInput
              label='Email'
              left={<TextInput.Icon icon='email' color={darkGreen}/>}
              placeholder='example@email.com'
              mode='outlined'
              style={styles.input}
              outlineColor={darkGreen}
              activeOutlineColor={darkGreen}
              autoCapitalize='none'
            />
            <TextInput
              label='Password'
              mode='outlined'
              secureTextEntry
              style={styles.input}
              outlineColor={darkGreen}
              activeOutlineColor={darkGreen}
              left={<TextInput.Icon icon='account-lock' color={darkGreen}/>}
              right={<TextInput.Icon icon='eye-off' />}
              autoCapitalize='none'
            />
            <TextInput
              label='Telephone Number'
              mode='outlined'
              left={<TextInput.Icon icon='phone' color={darkGreen}/>}
              secureTextEntry
              style={styles.input}
              outlineColor={darkGreen}
              activeOutlineColor={darkGreen}
              autoCapitalize='none'
            />
            <Button
              mode='contained'
              style={styles.button}
              buttonColor={theme.colors.tertiary}
            >
              REGISTER
            </Button>
            <View style={styles.register}>
              <Text variant='labelMedium'>Already have an account? </Text>
              <Button
                mode='text'
                textColor={theme.colors.tertiary}
                onPress={() =>
                  navigation.navigate('NotAuth', { screen: 'LoginScreen' })
                }
              >
                Login here!
              </Button>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </OneHealSafeArea>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sharedStyles.viewStyles.paddingHorizontal,
    paddingBottom: 10,
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
    marginBottom: 30,
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
    paddingVertical: 10,
  },
  title: {
    paddingBottom: 20,
    fontWeight: '600',
  },
});
