import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { PatientProfileNavigator } from './ProfileStack';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { NotAuthNavigator } from './NotAuthStack';
import { BottomTabNavigator } from './RootTabStack';
import { AppointmentNavigator } from './AppointmentStack';
import { ChatStack } from './ChatStack';
import { NewsStack } from './NewsStack';
import { useLogin } from '../hooks/useLogin';
import LoadingScreen from '../screens/LoadingScreen';
import { useHasOnboarded } from '../hooks/useHasOnboarded';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { data, isLoading } = useLogin();
  const { data: dataHasOnboarded, isLoading: isLoadingHasOnboarded } =
    useHasOnboarded();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading ? (
        <Stack.Group>
          <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
        </Stack.Group>
      ) : data && dataHasOnboarded ? (
        <Stack.Group>
          <Stack.Screen
            name='Root'
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='AppointmentStack'
            component={AppointmentNavigator}
          />
          <Stack.Screen name='ChatStack' component={ChatStack} />
          <Stack.Screen
            name='NotFound'
            component={NotFoundScreen}
            options={{ title: 'Oops!' }}
          />
          <Stack.Screen name='NewsStack' component={NewsStack} />
          <Stack.Screen name='Profile' component={PatientProfileNavigator} />
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name='Modal' component={ModalScreen} />
          </Stack.Group>
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name='NotAuth' component={NotAuthNavigator} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}
