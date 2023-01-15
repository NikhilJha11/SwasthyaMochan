import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppointmentConfirmationScreen from '../screens/AppointmentConfirmationScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import TabOneScreen from '../screens/TabOneScreen';
import { AppointmentStackParamList } from '../types';

const Stack = createNativeStackNavigator<AppointmentStackParamList>();

export function AppointmentNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='AppointmentScreen' component={AppointmentScreen} />
      <Stack.Screen
        name='AppointmentConfirmationScreen'
        component={AppointmentConfirmationScreen}
      />
      <Stack.Screen name='AppointmentsScreen' component={AppointmentsScreen} />
    </Stack.Navigator>
  );
}
