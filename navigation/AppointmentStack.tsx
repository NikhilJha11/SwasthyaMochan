import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppointmentScreen from '../screens/AppointmentScreen';
import TabOneScreen from '../screens/TabOneScreen';
import { AppointmentStackParamList } from '../types';

const Stack = createNativeStackNavigator<AppointmentStackParamList>();

export function AppointmentNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='AppointmentScreen' component={AppointmentScreen} />
    </Stack.Navigator>
  );
}
