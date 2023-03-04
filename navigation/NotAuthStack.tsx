import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/not-auth/LoginScreen';
import RegisterScreen from '../screens/not-auth/RegisterScreen';
import WelcomeScreen from '../screens/not-auth/WelcomeScreen';
import PrivacyStatmentScreen from '../screens/profile-patient-stack/PrivacyStatmentScreen';
import { NotAuthStackParamList } from '../types';

const Stack = createNativeStackNavigator<NotAuthStackParamList>();

export function NotAuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
    </Stack.Navigator>
  );
}
