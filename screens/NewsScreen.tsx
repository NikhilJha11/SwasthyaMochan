import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { darkGreen, darkGreen050 } from "../sharedStyles";
import { useTranslation } from "react-i18next";
import { useNews } from "../hooks/useNews";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NewsScreenParamList } from "../types";

const NewsScreen = () => {
  const { t } = useTranslation();
  const params = useRoute().params as NewsScreenParamList;
  const navigation = useNavigation();

  return (
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
      <Text variant="headlineSmall" style={styles.textTop}>
        {params.title}
      </Text>
      <Text variant="labelLarge" style={styles.textTop}>
        {params.content}
      </Text>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: darkGreen050,
  },
  textTop: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.6,
    fontWeight: "600",
    marginBottom: 10,
  },
  textBottom: {
    padding: 5,
    fontWeight: "600",

    opacity: 0.8,
  },
});
