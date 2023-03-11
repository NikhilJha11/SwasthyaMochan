/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { PatientProfileNavigator } from "./ProfileStack";
import TabOneScreen from "../screens/TabOneScreen";
import TabThreeScreen from "../screens/TabThreeScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { NotAuthNavigator } from "./NotAuthStack";
import { BottomTabNavigator } from "./RootTabStack";
import { useEffect, useState } from "react";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import AppointmentScreen from "../screens/AppointmentScreen";
import { AppointmentNavigator } from "./AppointmentStack";
import { ChatStack } from "./ChatStack";
import NewsScreen from "../screens/NewsScreen";
import { NewsStack } from "./NewsStack";
import { useLogin } from "../hooks/useLogin";
import LoadingScreen from "../screens/LoadingScreen";
import { useQuery } from "@tanstack/react-query";
import { useHasOnboarded } from "../hooks/useHasOnboarded";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
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
  // const { getItem } = useAsyncStorage('credentials');
  // const { getItem  } = useAsyncStorage('hasOnboarded');
  const { data, isLoading } = useLogin();
  const { data: dataHasOnboarded, isLoading: isLoadingHasOnboarded } =
    useHasOnboarded();

  // console.log('root data is', data, isLoading);
  // console.log('dataHasOnboarded is', dataHasOnboarded);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading ? (
        <Stack.Group>
          <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        </Stack.Group>
      ) : data && dataHasOnboarded ? (
        <Stack.Group>
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AppointmentStack"
            component={AppointmentNavigator}
          />
          <Stack.Screen name="ChatStack" component={ChatStack} />
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{ title: "Oops!" }}
          />
          <Stack.Screen name="NewsStack" component={NewsStack} />
          <Stack.Screen name="Profile" component={PatientProfileNavigator} />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="NotAuth" component={NotAuthNavigator} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}
