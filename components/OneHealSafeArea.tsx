import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  darkGreen,
  darkGreen000,
  darkGreen100,
  darkGreen200,
  darkGreen300,
  lightGreen,
  sharedStyles,
} from '../sharedStyles';
import { useTheme } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  statusBar: 'dark' | 'light';
  styles?: ViewStyle;
};

const OneHealSafeArea = (props: PropsWithChildren<Props>) => {
  const propStyles = props?.styles;
  const theme = useTheme();
  return (
    <LinearGradient
      colors={[darkGreen000, darkGreen100]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0, y: 0 }}
      style={{ height: '100%', width: '100%' }}
    >
      <SafeAreaView
        style={[
          styles.safeAreaContainer,
          propStyles,
          // { backgroundColor: darkGreen000 },
        ]}
      >
        <StatusBar style={props.statusBar} />
        {props.children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default OneHealSafeArea;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  imageBackground: { flex: 1 },
});
