import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { darkGreen, sharedStyles } from '../../sharedStyles';
import {
  Button,
  TextInput,
  Text,
  useTheme,
  Portal,
  Dialog,
} from 'react-native-paper';
import OneHealSafeArea from '../../components/OneHealSafeArea';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LoginParams } from '../../hooks/useLogin';

const LoginScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const qc = useQueryClient();
  const loginUser = useMutation({
    mutationFn: async (params: LoginParams) =>
      await AsyncStorage.setItem('credentials', params.password),
    onSuccess: () => qc.invalidateQueries(['user']),
  });

  const { t } = useTranslation();

  const login = async (password = '123123') => {
    try {
      setLoading(true);
      const hasOnboardedAlready = await AsyncStorage.getItem('hasOnboarded');

      loginUser.mutateAsync({ password });

      setLoading(false);

      if (hasOnboardedAlready) {
        navigation.navigate('Root');
      } else if (!hasOnboardedAlready) {
        navigation.navigate('NotAuth', { screen: 'OnboardingScreens' });
      }
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
                <I18nextProvider i18n={i18n}>
                  {' '}
                  <Text>{t('login')}</Text>{' '}
                </I18nextProvider>
              </Text>
            </View>

            <TextInput
              label='Kielstein ID'
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
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={styles.idNumber}
            >
              <Text variant='bodySmall' style={styles.idNumberText}>
                <I18nextProvider i18n={i18n}>
                  {' '}
                  <Text>{t('obtainid')}</Text>{' '}
                </I18nextProvider>
              </Text>
            </TouchableOpacity>

            <Portal>
              <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                <Dialog.Title>What is Kielstein ID ?</Dialog.Title>
                <Dialog.Content>
                  <Text variant='bodyMedium'>
                    <I18nextProvider i18n={i18n}>
                      {' '}
                      <Text>{t('whtisID')}</Text>{' '}
                    </I18nextProvider>
                  </Text>
                </Dialog.Content>
                <Dialog.Content>
                  <Text variant='bodyMedium'>
                    <I18nextProvider i18n={i18n}>
                      {' '}
                      <Text>{t('obtainidhow')}</Text>{' '}
                    </I18nextProvider>
                  </Text>
                </Dialog.Content>
                <Dialog.Content>
                  <Text
                    variant='bodySmall'
                    style={styles.kielstein}
                    onPress={() =>
                      Linking.openURL(
                        'https://www.kielstein.de/standorte-uebersicht-2/'
                      )
                    }
                  >
                    <I18nextProvider i18n={i18n}>
                      {' '}
                      <Text>{t('nearestKielstein')}</Text>{' '}
                    </I18nextProvider>
                  </Text>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={() => setVisible(false)}>OK</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>

            <Button
              mode='contained'
              style={styles.button}
              buttonColor={theme.colors.tertiary}
              onPress={() => login(password)}
              loading={loading}
            >
              <I18nextProvider i18n={i18n}>
                {' '}
                <Text style={{ color: '#fff' }}>{t('login')}</Text>{' '}
              </I18nextProvider>
            </Button>
            <View style={styles.register}>
               {/*<Text variant='labelMedium'>
                <I18nextProvider i18n={i18n}>
                  {' '}
                  <Text>{t('noaccount')}</Text>{' '}
                </I18nextProvider>{' '}
              </Text>
              <Button
                mode='text'
                textColor={theme.colors.tertiary}
                onPress={() =>
                  navigation.navigate('NotAuth', { screen: 'RegisterScreen' })
                }
              >
                <I18nextProvider i18n={i18n}>
                  {' '}
                  <Text>{t('newregiseter')}</Text>{' '}
                </I18nextProvider>
              </Button>*/}
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
  idNumber: {
    marginBottom: 50,
    marginVertical: 20,
  },
  idNumberText: {
    textAlign: 'right',
    opacity: 0.7,
  },
  kielstein: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
