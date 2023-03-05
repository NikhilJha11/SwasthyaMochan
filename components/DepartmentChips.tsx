import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { Chip, Text } from 'react-native-paper';
import { darkGreen, darkGreen100, darkGreen200 } from '../sharedStyles';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n';


type Chips = {
  id: number;
  name: string;
  choosen: boolean;
  icon: string;
};

type Props = {
  chips: Chips[];
  setChips: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        icon: string;
        name: string;
        choosen: boolean;
      }[]
    >
  >;
  style?: ViewStyle;
};

const DepartmentChips = (props: Props) => {
  const { chips, setChips } = props;
  const { t } = useTranslation();

  const chooseLocation = (id: number) => {
    let resetChips = chips.map((chip) => {
      return { ...chip, choosen: false };
    });
    const chosenChip = chips.findIndex((chip) => chip.id === id);

    let result = chips.slice(chosenChip, chosenChip + 1)[0];
    result.choosen = !result.choosen;
    result.icon = 'check';

    resetChips.splice(chosenChip, 1, result);

    setChips(resetChips);
  };

  return (
    <View style={[styles.container, props.style]}>
      <Text variant='headlineSmall' style={styles.chipTitle}>
      {t('Departments')}
      </Text>
      <View style={styles.chips}>
        {chips.map((chip) => (
          <Chip
            onPress={() => chooseLocation(chip.id)}
            style={[
              styles.chip,
              {
                backgroundColor: chip.choosen ? darkGreen : darkGreen200,
              },
            ]}
            key={chip.id}
            textStyle={{ color: chip.choosen ? '#fff' : darkGreen }}
          >
            {chip.name}
          </Chip>
        ))}
      </View>
    </View>
  );
};

export default DepartmentChips;

const styles = StyleSheet.create({
  chip: {
    margin: 5,
    padding: 5,
    backgroundColor: darkGreen200,
  },
  chipTitle: {
    fontWeight: '600',
    color: darkGreen,
    marginLeft: 10,
    marginVertical: 5,
  },
  chips: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    borderWidth: 1,
    borderColor: darkGreen100,
    borderRadius: 10,
    marginBottom: 10,
  },
});
