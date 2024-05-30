import React, { createContext, useContext, useEffect, useState } from 'react';
import tw, { useDeviceContext, useAppColorScheme } from 'twrnc';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import RootNavigator from './src/navigator/rootNavigate';

function App(): JSX.Element {
  return (
    <SafeAreaProvider >

      <RootNavigator />
    </SafeAreaProvider>
  );
}


export default App;
