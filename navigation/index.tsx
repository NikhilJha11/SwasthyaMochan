/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { NotAuthNavigator } from './NotAuthStack';
import { BottomTabNavigator } from './RootTabStack';
import { useEffect, useState } from 'react';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import AppointmentScreen from '../screens/AppointmentScreen';
import { AppointmentNavigator } from './AppointmentStack';

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

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [credentials, setCredentials] = useState<string | null>();
  const [loading, setLoading] = useState(false);
  const { getItem, setItem, removeItem } = useAsyncStorage('credentials');

  const readFromAsyncStorage = async () => {
    const item = await getItem();
    setCredentials(item);
  };

  useEffect(() => {
    readFromAsyncStorage();
  }, []);

  console.log('creds are ', credentials);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='NotAuth' component={NotAuthNavigator} />
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='AppointmentStack' component={AppointmentNavigator} />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
