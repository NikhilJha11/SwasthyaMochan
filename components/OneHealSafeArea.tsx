import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { sharedStyles } from '../sharedStyles';

type Props = {
  statusBar: 'dark' | 'light';
  styles?: ViewStyle;
};

const OneHealSafeArea = (props: PropsWithChildren<Props>) => {
  const propStyles = props?.styles;
  return (
    <SafeAreaView style={[styles.safeAreaContainer, propStyles]}>
      <StatusBar style={props.statusBar} />
      {props.children}
    </SafeAreaView>
  );
};

export default OneHealSafeArea;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: sharedStyles.viewStyles.backgroundColor,
  },
});
