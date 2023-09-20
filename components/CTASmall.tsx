import { StyleSheet, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { darkGreen, darkGreen500 } from '../sharedStyles';
import { Text } from 'react-native-paper';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n';

const CTASmall = () => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#34bccc',
      }}
    >
      <Text
        style={{ color: '#7bb3b8', opacity: 0.7, marginRight: 5 }}
        variant='labelSmall'
      >
        {t('SeeALL')}
      </Text>
      <MaterialIcons name='keyboard-arrow-right' />
    </TouchableOpacity>
  );
};

export default CTASmall;

const styles = StyleSheet.create({});
