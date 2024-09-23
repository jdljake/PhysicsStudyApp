import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'react-native-magnus';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import THEMES from './styles/themes';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={THEMES.light}>
        {/* Application content is inside "Navigation" component */}
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </ThemeProvider>
    );
  }
}
