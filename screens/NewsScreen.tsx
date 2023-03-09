import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from 'react-native-paper';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { darkGreen, darkGreen050 } from '../sharedStyles';
import { useTranslation } from 'react-i18next';
import { useNews } from '../hooks/useNews';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NewsScreenParamList } from '../types';

const NewsScreen = () => {
  const { t } = useTranslation();
  const params = useRoute().params as NewsScreenParamList;

  return (
    <View style={styles.container}>
      <Text variant='headlineSmall' style={styles.textTop}>
        {params.title}
      </Text>
      <Text variant='labelLarge' style={styles.textTop}>
        {params.content} 2
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
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6,
    fontWeight: '600',
    marginBottom: 10,
  },
  textBottom: {
    padding: 5,
    fontWeight: '600',

    opacity: 0.8,
  },
});
