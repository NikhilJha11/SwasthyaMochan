import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import OneHealSafeArea from '../../components/OneHealSafeArea';
import { Button, useTheme } from 'react-native-paper';
import { lightGreen } from '../../sharedStyles';
import { StatusBar } from 'expo-status-bar';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const theme = useTheme();

  return (
    <ImageBackground
      source={require('../../assets/images/welcome.png')}
      style={[
        styles.imageBackground,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.container}>
        <StatusBar style='dark' />
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/logo-full-1.png')}
            resizeMode='contain'
            style={styles.image}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode='contained'
            buttonColor={theme.colors.tertiary}
            style={styles.button}
            onPress={() =>
              navigation.navigate('NotAuth', { screen: 'RegisterScreen' })
            }
          >
            REGISTER
          </Button>
          <Button
            mode='outlined'
            style={styles.button}
            onPress={() =>
              navigation.navigate('NotAuth', { screen: 'LoginScreen' })
            }
          >
            LOGIN
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  imageBackground: { flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { flex: 1 },
  buttonContainer: {
    flex: 1,
  },
  button: {
    paddingVertical: 5,
    marginBottom: 30,
  },
});
