import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}><I18nextProvider i18n={i18n}> <Text>{t('notExist')}</Text> </I18nextProvider></Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}><I18nextProvider i18n={i18n}> <Text>{t('gotohome')}</Text> </I18nextProvider></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
