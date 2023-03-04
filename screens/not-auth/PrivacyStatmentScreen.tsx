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
  import { Linking } from 'react-native';
  import { Button, Text, useTheme, Checkbox } from 'react-native-paper';
  import OneHealSafeArea from '../../components/OneHealSafeArea';
  import { useNavigation } from '@react-navigation/native';
  
  const PrivacyStatmentScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);
    const [textInputValue1, setTextInputValue1] = useState('');

  
  
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
               <Text variant='titleLarge'
                style={[styles.title, { color: theme.colors.tertiary }]}>
                Privacy Statement
                </Text>
              
            
            <Text style={styles.input}>
            We take your privacy seriously and are committed to protecting your personal information.
            If you choose to use the profile feature in our application, we may collect and use your personal data to manage and customize your user experience. Additionally, we may share your data with "OneHeal" who will assist us in providing our services to you. We will only share your data with these third-party providers to the extent necessary for them to perform their services for us, and we will take appropriate measures to ensure that your data is handled in 
            accordance with our privacy policy and applicable data protection laws.
                </Text>
    
        <Text 
            style={[styles.title,{paddingTop: 20},{fontSize:25}, { color: theme.colors.tertiary }]}> 
           Do you agree to our privacy policy? 
        </Text> 
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox.Android 
            style={[styles.cheakbox]}
            color={darkGreen}
            status={isChecked ? 'checked' : 'unchecked'}
             onPress={() => setIsChecked(!isChecked)}
            /> 
            <Text style={{ marginLeft:1}}> Yes, I agree.</Text> 
            </View>
             {isChecked && (
        <Button
            mode='contained'
            style={styles.button}
            buttonColor={theme.colors.tertiary}
            onPress={() =>
                navigation.navigate('Profile', { screen: 'PatientProfileScreen' })
              }
        >
        Patient Profile
        </Button> )}
     {/*  <View style={styles.register}>
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
              </View> */}
        
            </ScrollView>
          </TouchableWithoutFeedback>
        </OneHealSafeArea>
      </KeyboardAvoidingView>
    );
  };
  
  export default PrivacyStatmentScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: sharedStyles.viewStyles.paddingHorizontal,
      paddingBottom: 10,
    },
    image: {
      flex: 1,
      marginLeft:40,
      alignItems: 'center',
      justifyContent: 'space-evenly',
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
      marginTop: 40 ,
    },
    title: {
      paddingBottom: 20,
      fontWeight: '600',
    },
    cheakbox: {
      paddingBottom: 20,
      color: sharedStyles.viewStyles.borderColor,
      
    },
    link: {
        color: 'darkGreen',
        textDecorationLine: 'underline',
      },
  });