import { useState } from 'react';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import {
  darkGreen,
  darkGreen000,
  darkGreen100,
  darkGreen600,
} from '../sharedStyles';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n';
type Pill = { id: number; checked: 'unchecked' | 'checked' | 'indeterminate' };

export const PillReminder = () => {
  const [numOfPills, setNumOfPills] = useState<Pill[]>([
    { id: 0, checked: 'checked' },
    { id: 1, checked: 'unchecked' },
    { id: 2, checked: 'unchecked' },
  ]);

  const updateCheckboxes = (pill: Pill) => {
    const copy = numOfPills;
    const index = copy.findIndex((el) => el.id === pill.id);

    setNumOfPills([
      ...copy.slice(0, index),
      {
        id: pill.id,
        checked: pill.checked === 'checked' ? 'unchecked' : 'checked',
      },
      ...copy.slice(index + 1),
    ]);
  };
  const { t } = useTranslation();

  return (
    <View style={styles.root}>
      <Text style={styles.mainTitle}> {t('PillReminders')}</Text>

      <View style={styles.container}>
        <Image
          source={require('../assets/images/pills.png')}
          resizeMode='contain'
          style={styles.img}
        />
        <View style={styles.texts}>
          <Text variant='labelSmall' style={styles.label}>
            3 pills a day, until 8th March 2023
          </Text>
          <Text variant='titleLarge' style={styles.title}>
            Aspirine
          </Text>
          <View style={styles.checkboxContainer}>
            {numOfPills.map((pill) => (
              <View style={styles.checkboxItem} key={pill.id}>
                <Checkbox
                  status={pill.checked}
                  key={pill.id}
                  color={darkGreen600}
                  uncheckedColor={darkGreen000}
                  onPress={() => updateCheckboxes(pill)}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: darkGreen000,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 40,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainTitle: {
    fontWeight: '800',
    color: darkGreen,
    opacity: 0.8,
    marginBottom: 30,
  },
  texts: {},
  img: {
    marginRight: 20,
  },
  label: { color: 'rgba(0,0,0,0.6)' },
  title: { color: 'rgba(0,0,0,0.8)', fontWeight: '700' },
  checkboxContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  checkboxItem: {
    borderWidth: 1,
    borderColor: darkGreen600,
    borderRadius: 50,
    marginTop: 20,
  },
});
