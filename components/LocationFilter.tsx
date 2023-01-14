import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import CTABig from './CTABig';
import { Button, Dialog, Portal, RadioButton } from 'react-native-paper';

type Location = {
  id: number;
  name: string;
};

type Props = {
  locations: Location[];
  setLocations: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
      }[]
    >
  >;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const LocationFilter = (props: Props) => {
  const { locations, setLocations, setValue, setVisible, value, visible } =
    props;

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  return (
    <>
      <CTABig
        icon={'location-on'}
        text='Locations'
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
              <RadioButton.Group
                onValueChange={(value) => {
                  setValue(value);
                  setVisible(!visible);
                }}
                value={value}
              >
                {locations.map((location) => (
                  <RadioButton.Item
                    label={location.name}
                    value={location.name.toLowerCase()}
                    key={location.id}
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
