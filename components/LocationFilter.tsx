import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import CTABig from './CTABig';
import {
  Button,
  Dialog,
  Divider,
  Portal,
  RadioButton,
  Text,
} from 'react-native-paper'; 
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n';

export type Location = {
  address: string;
  city: string;
  latitude: string;
  locationId: string;
  longitude: string;
  zipCode: string;
  locationName: string;
};

type Props = {
  locations?: Location[];
  setLocation: React.Dispatch<React.SetStateAction<number>>;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  location: number;
};

const LocationFilter = (props: Props) => {
  const { locations, location, setLocation, setVisible, visible } = props;

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const loc1 = useMemo(() => locations?.filter((l) => l.city === 'Jena'), []);
  const loc2 = useMemo(() => locations?.filter((l) => l.city === 'Erfurt'), []);

  const { t } = useTranslation();
  return (
    <>
      <CTABig
        icon={'location-on'}
        text={t('Locations')}
        onPress={() => showDialog()}
      />
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Choose Location</Dialog.Title>
          <Dialog.ScrollArea>
            <ScrollView
              contentContainerStyle={{
                paddingHorizontal: 24,
              }}
              style={{ height: 250 }}
            >
              <Text variant='headlineSmall'>Erfurt</Text>
              <RadioButton.Group
                onValueChange={(value) => {
                  // if (value === loc) {
                  //   setValue('');
                  // } else {
                  //   setValue(value);
                  // }
                  setLocation(Number(value));
                  setVisible(!visible);
                }}
                value={location.toString()}
              >
                {loc2?.map((location) => (
                  <RadioButton.Item
                    label={location.locationName}
                    value={location.locationId}
                    key={Number(location.locationId)}
                  />
                ))}
              </RadioButton.Group>
              <Divider />
              <Text variant='headlineSmall'>Jena</Text>
              <RadioButton.Group
                onValueChange={(value) => {
                  // if (value === loc) {
                  //   setValue('');
                  // } else {
                  //   setValue(value);
                  // }
                  setLocation(Number(value));
                  setVisible(!visible);
                }}
                value={location.toString()}
              >
                {loc1?.map((location) => (
                  <RadioButton.Item
                    label={location.locationName}
                    value={location.locationId}
                    key={Number(location.locationId)}
                  />
                ))}
              </RadioButton.Group>
            </ScrollView>
          </Dialog.ScrollArea>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};

export default LocationFilter;

const styles = StyleSheet.create({});
