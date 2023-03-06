import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Text } from 'react-native-paper';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import {
  darkGreen,
  darkGreen000,
  darkGreen050,
  darkGreen100,
  darkGreen200,
} from '../sharedStyles';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string;
  content: string;
};

const NewsItem = (props: Props) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('NewsStack', {
            screen: 'NewsScreen',
            params: { title: props.title, content: props.content },
          })
        }
      >
        <Text variant='headlineSmall' style={styles.textTop}>
          {t('news')}
        </Text>
        <Text variant='labelLarge' style={styles.textTop}>
          <MaterialIcons name='info' color={darkGreen} size={16} />{' '}
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    paddingRight: 50,
    backgroundColor: darkGreen050,
    marginRight: 30,
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
