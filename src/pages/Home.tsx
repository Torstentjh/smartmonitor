import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDeviceContext, useAppColorScheme } from 'twrnc';
import tw from '../assets/tailwind'
import theme from '../store/setting'
const Home = () => {
    useDeviceContext(tw, {
        observeDeviceColorSchemeChanges: false,
        initialColorScheme: `light`, // 'light' | 'dark' | 'device'
    });
    const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);
    const { toggleTheme, initTheme } = theme();
    return (
        <SafeAreaView >
            <View style={tw.style('dark:bg-dark-bg w-full h-full')}>
                <Text style={tw.style(' text-red-400 dark:text-green-600')}>ComponentName</Text>
            </View>
        </SafeAreaView>
    );
};
export default Home;