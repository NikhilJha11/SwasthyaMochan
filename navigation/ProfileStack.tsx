import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PatientProfileScreen from '../screens/profile-patient-stack/PatientProfileScreen';
import {ProfileStackParamList } from '../types';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export function PatientProfileNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='PatientProfileScreen' component={PatientProfileScreen} />
    </Stack.Navigator>
  );
}
