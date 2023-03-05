import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/not-auth/LoginScreen';
import RegisterScreen from '../screens/not-auth/RegisterScreen';
import WelcomeScreen from '../screens/not-auth/WelcomeScreen';
import { NotAuthStackParamList } from '../types';
import OnboardingScreens from '../screens/not-auth/OnboardingScreens';
import { useHasOnboarded } from '../hooks/useHasOnboarded';

const Stack = createNativeStackNavigator<NotAuthStackParamList>();

export function NotAuthNavigator() {
  const { data: dataHasOnboarded, isLoading: isLoadingHasOnboarded } =
    useHasOnboarded();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {dataHasOnboarded ? (
        <Stack.Group>
          <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
          <Stack.Screen
            name='OnboardingScreens'
            component={OnboardingScreens}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}
