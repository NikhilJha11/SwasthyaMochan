/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  NotAuth: NavigatorScreenParams<NotAuthStackParamList> | undefined;
  Profile: NavigatorScreenParams<ProfileStackParamList> | undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  AppointmentStack:
    | NavigatorScreenParams<AppointmentStackParamList>
    | undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type Doctor = {
  doctorId: number;
  name: string;
  specialization: string;
  locationId: number;
  chosenLocation?: string;
  chosenLocationName?: string;
};
export type AppointmentConfirmationScreenParams = {
  doctor: string;
  date: string;
  day: string;
  time: string;
};

export type AppointmentStackParamList = {
  AppointmentScreen: Doctor;
  AppointmentConfirmationScreen: AppointmentConfirmationScreenParams;
  AppointmentsScreen: undefined;
};
export type NotAuthStackParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;

};
export type ProfileStackParamList = {
  PatientProfileScreen: undefined;
  PrivacyStatmentScreen: undefined;

  OnboardingScreens: undefined;
};
export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  ChatScreen: undefined;
  TabThree: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type NotAuthScreenProps<Screen extends keyof NotAuthStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<NotAuthStackParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
  export type ProfileScreenProps<Screen extends keyof ProfileStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<ProfileStackParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
