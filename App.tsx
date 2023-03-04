import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { colors } from './colors';

const theme = {
  ...DefaultTheme,
  colors: colors, // Copy it from the color codes scheme and then use it here
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </PaperProvider>
    );
  }
}
