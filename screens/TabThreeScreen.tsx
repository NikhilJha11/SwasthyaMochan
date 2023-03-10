import { StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import CTABig from '../components/CTABig';

import OneHealSafeArea from '../components/OneHealSafeArea';
import ProfileButtons from '../components/ProfileButtons';
import ProfileTop from '../components/ProfileTop';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabThreeScreen({
  navigation,
}: RootTabScreenProps<'TabThree'>) {
  const promptLogout = () =>
    Alert.alert(
      'Do you want to logout ?',
      undefined,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('hi'),
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => console.log('hi2'),
        },
      ],
      { cancelable: true }
    );
  return (
    <OneHealSafeArea statusBar='dark'>
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <ProfileTop />
          <ProfileButtons />
          <CTABig text='LOGOUT' icon='logout' onPress={() => promptLogout()} />
        </ScrollView>
      </View>
    </OneHealSafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
});
