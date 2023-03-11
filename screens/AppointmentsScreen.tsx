import {
  ScrollView,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import OneHealSafeArea from "../components/OneHealSafeArea";
import {
  Avatar,
  Button,
  Divider,
  SegmentedButtons,
  Text,
} from "react-native-paper";
import {
  darkGreen,
  darkGreen100,
  darkGreen200,
  darkGreen300,
  darkGreen500,
  darkGreen600,
} from "../sharedStyles";
import OneHealSegmentedButtons from "../components/OneHealSegmentedButtons";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Appointment from "../components/Appointment";
import { useNavigation } from "@react-navigation/native";

const AppointmentsScreen = () => {
  const [segment, setSegment] = useState("Upcoming");
  const navigation = useNavigation();

  return (
    <OneHealSafeArea statusBar="dark">
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            marginTop: 20,
            borderRadius: 50,
            borderColor: darkGreen,
            borderWidth: 2,
            width: 34,
            height: 34,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} />
        </TouchableOpacity>
        <Text variant="headlineLarge" style={styles.topText}>
          Appointments
        </Text>

        <OneHealSegmentedButtons segment={segment} setSegment={setSegment} />

        <ScrollView style={styles.appointments}>
          {segment === "Upcoming" ? (
            <>
              <Text variant="headlineSmall" style={styles.visit}>
                Closest visits
              </Text>
              <Appointment name="Dr. Hans Müller" spec="Allgemeinmedizin" />
              <Appointment name="Dr. Martina Muster" spec="Neurologie" />
            </>
          ) : (
            <>
              <Text variant="headlineSmall" style={styles.visit}>
                Recent visits
              </Text>
              <Appointment name="Dr. Martina Muster" spec="Neurologie" />
            </>
          )}
        </ScrollView>
      </View>
    </OneHealSafeArea>
  );
};

export default AppointmentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topText: {
    fontWeight: "600",
    paddingTop: 20,
    marginBottom: 30,
  },
  appointments: {
    flex: 1,
    borderRadius: 10,
  },
  visit: {
    marginVertical: 10,
  },
});
