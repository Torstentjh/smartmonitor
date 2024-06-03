import React, { createContext, useContext, useEffect, useState } from 'react';
import tw, { useDeviceContext, useAppColorScheme } from 'twrnc';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import {
  Pressable,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';
import RootNavigator from './src/navigator/rootNavigate';

function App(): JSX.Element {
  useDeviceContext(tw, {
    observeDeviceColorSchemeChanges: false,
    initialColorScheme: `light`, // 'light' | 'dark' | 'device'
  });
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);
  // const { toggleTheme } = theme();
  return (
    <SafeAreaProvider >
      <RootNavigator />
    </SafeAreaProvider>
  );
}


export default App;
