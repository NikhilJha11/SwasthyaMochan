import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrivacyStatmentScreen from '../screens/profile-patient-stack/PrivacyStatmentScreen';
import PatientProfileScreen from '../screens/profile-patient-stack/PatientProfileScreen';
import {ProfileStackParamList } from '../types';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export function PatientProfileNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='PatientProfileScreen' component={PatientProfileScreen} />
      <Stack.Screen name='PrivacyStatmentScreen' component={PrivacyStatmentScreen} />
    </Stack.Navigator>
  );
}
