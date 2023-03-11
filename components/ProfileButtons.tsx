import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileButton from "./ProfileButton";
import { useNavigation } from "@react-navigation/native";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../i18n";

const ProfileButtons = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <>
      {/* <ProfileButton icon='user' text='Personal Data' />*/}
      <ProfileButton
        icon="calendar"
        text={t("UpcomingAppointments")}
        onPress={() =>
          navigation.navigate("AppointmentStack", {
            screen: "AppointmentsScreen",
          })
        }
      />
      <ProfileButton
        icon="clipboard"
        text="Patient Profile"
        onPress={() =>
          navigation.navigate("Profile", { screen: "PrivacyStatmentScreen" })
        }
      />

      <ProfileButton icon="clock" text={t("RecentAppointments")} />
      <ProfileButton icon="paperclip" text={t("Documents")} />
    </>
  );
};

export default ProfileButtons;

const styles = StyleSheet.create({});
