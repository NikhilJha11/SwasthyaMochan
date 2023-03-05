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
  import { Button, TextInput, Text, useTheme, Checkbox } from 'react-native-paper';
  import OneHealSafeArea from '../../components/OneHealSafeArea';
  import { useNavigation } from '@react-navigation/native';
  
  const PatientProfileScreen = () => {
    const theme = useTheme();
    const [isChecked, setIsChecked] = useState(false);
    const [textInputValue1, setTextInputValue1] = useState('');
    const [textInputValue2, setTextInputValue2] = useState('');
    const [textInputValue3, setTextInputValue3] = useState('');
    const navigation = useNavigation();
   
  
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
                style={[styles.title,{paddingTop: 20},{fontSize:25}, { color: theme.colors.tertiary }]}> 
                Patient Profile 
              </Text>
              <TextInput
                label='Gender'
                placeholder='Gender'
                mode='outlined'
                style={styles.input}
                outlineColor={darkGreen}
                activeOutlineColor={darkGreen}
                autoCapitalize='none'
              />
               <TextInput
                label='Weight'
                placeholder='Weight'
                mode='outlined'
                secureTextEntry
                style={styles.input}
                outlineColor={darkGreen}
                activeOutlineColor={darkGreen}
                autoCapitalize='none'
              />
              <TextInput
                label='Known Diseases'
                mode='outlined'
                placeholder='Known Diseases'
                style={styles.input}
                outlineColor={darkGreen}
                activeOutlineColor={darkGreen}
                autoCapitalize='none'
              />
              <TextInput
                label='Allergy'
                mode='outlined'
                style={styles.input}
                outlineColor={darkGreen}
                activeOutlineColor={darkGreen}
                autoCapitalize='none'
              />
              
               <TextInput
                label='Permanent Medicine'
                mode='outlined'
                style={styles.input}
                outlineColor={darkGreen}
                activeOutlineColor={darkGreen}
                autoCapitalize='none'
              />
               <TextInput
                label='Family Diseases'
                mode='outlined'
                style={styles.input}
                outlineColor={darkGreen}
                activeOutlineColor={darkGreen}
                autoCapitalize='none'
              />
              <Text 
              style={[styles.title,{paddingTop: 20},{fontSize:25}, { color: theme.colors.tertiary }]}> 
              Is the patient underage? </Text>
              <Checkbox.Android 
              style={[styles.cheakbox]}
              color={darkGreen}
              status={isChecked ? 'checked' : 'unchecked'}
               onPress={() => setIsChecked(!isChecked)}
              /> 
               {isChecked && (
               <>
              <TextInput
              label="Legal guardian name "
              value={textInputValue1}
              style={styles.input}
              onChangeText={setTextInputValue1}
         
               />
              <TextInput
              label="Legal guardian surname"
              style={styles.input}
              value={textInputValue2}
              onChangeText={setTextInputValue2}
              />
              <TextInput
              label="Legal guardian phone number"
              value={textInputValue3}
              style={styles.input}
              onChangeText={setTextInputValue3}
      
               />
              </>
              )}
              
              <Text 
              style={[styles.title,{paddingTop: 20},{fontSize:25}, { color: theme.colors.tertiary }]}> 
              Emergency Contact </Text>
              <TextInput
                label='Name '
                placeholder='Name'
                mode='outlined'
                style={styles.input}
                outlineColor={darkGreen}
                activeOutlineColor={darkGreen}
                autoCapitalize='none'
              />
              <TextInput
                label='Surname'
                mode='outlined'
                secureTextEntry
                style={styles.input}
                outlineColor={darkGreen}
                activeOutlineColor={darkGreen}
                autoCapitalize='none'
              />
              <TextInput
                label='Telephone Number'
                mode='outlined'
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
                Save
              </Button>
            </ScrollView>
          </TouchableWithoutFeedback>
        </OneHealSafeArea>
      </KeyboardAvoidingView>
    );
  };
  
  export default PatientProfileScreen;
  
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
    cheakbox: {
      paddingBottom: 20,
      color: sharedStyles.viewStyles.borderColor,
      
    },
  });
  