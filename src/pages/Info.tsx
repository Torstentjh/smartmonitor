import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDeviceContext, useAppColorScheme } from 'twrnc';
import tw from '../assets/tailwind'
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../store/setting'
const Info = () => {
    useDeviceContext(tw, {
        observeDeviceColorSchemeChanges: false,
        initialColorScheme: `light`, // 'light' | 'dark' | 'device'
    });
    const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);
    const { toggleTheme } = theme();

    return (
        <SafeAreaView>

            <View style={tw.style('dark:bg-slate-600 w-full h-full')}>
                <View style={tw`mt-1`}>
                    <Text style={tw`text-lg text-black dark:text-red-500`}>ceui</Text>
                    <Text style={tw` text-lg text-black dark:text-white`}>Hello World</Text>
                </View>
                <Text style={tw`text-lg text-black dark:text-white`}>Hello World</Text>
                <TouchableOpacity style={tw.style('rounded-xl bg-slate-400 text-2xl w-36 h-9')} onPress={() => {
                    // toggleColorScheme()
                    // // console.log('1');
                    // console.log(colorScheme, '====');
                    const the = colorScheme === 'dark' ? 'light' : 'dark'
                    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
                    toggleTheme(colorScheme!)
                    // console.log('2');

                    // storedEvents
                }}>
                    <Text style={tw`text-black dark:text-white `}>Switch Color Scheme</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
};

export default Info;