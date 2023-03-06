import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppointmentConfirmationScreen from '../screens/AppointmentConfirmationScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import Chat from '../screens/Chat';
import ChatScreen from '../screens/ChatScreen';
import TabOneScreen from '../screens/TabOneScreen';
import { AppointmentStackParamList, ChatStackParamList } from '../types';

const Stack = createNativeStackNavigator<ChatStackParamList>();

export function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ChatScreen' component={ChatScreen} />
      <Stack.Screen name='Chat' component={Chat} />
    </Stack.Navigator>
  );
}
