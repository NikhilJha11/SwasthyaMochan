import { StyleSheet, ScrollView, Alert } from 'react-native';
import CTABig from '../components/CTABig';

import OneHealSafeArea from '../components/OneHealSafeArea';
import ProfileButtons from '../components/ProfileButtons';
import ProfileTop from '../components/ProfileTop';
import { View } from '../components/Themed';
import { useHasOnboarded } from '../hooks/useHasOnboarded';
import { useLogin } from '../hooks/useLogin';
import { useLogout } from '../hooks/useLogout';
import { RootTabScreenProps } from '../types';

export default function TabThreeScreen({
  navigation,
}: RootTabScreenProps<'TabThree'>) {
  const { mutate: logout } = useLogout();

  const promptLogout = () =>
    Alert.alert(
      'Do you want to logout ?',
      undefined,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => logout(),
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
