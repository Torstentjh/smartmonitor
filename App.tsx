import React from 'react';
import tw from 'twrnc';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RootNavigator from './src/navigator/rootNavigate';
import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';




function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <SafeAreaProvider >
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} translucent></StatusBar>
      <RootNavigator />
    </SafeAreaProvider>
  );
}


export default App;
