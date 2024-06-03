import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDeviceContext, useAppColorScheme } from 'twrnc';
import tw from '../assets/tailwind'
import theme from '../store/setting'
import ThemeModal from '../components/BtmSheet';
const Setting = () => {
    // useDeviceContext(tw, {
    //     observeDeviceColorSchemeChanges: false,
    //     initialColorScheme: `light`, // 'light' | 'dark' | 'device'
    // });
    // const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);
    // const { toggleTheme, initTheme } = theme();
    return (
        <SafeAreaView>
            <View style={tw.style('dark:bg-black bg-red-600')}>
                <View style={tw.style('justify-center items-center bg-white flex')}>
                    {/* <Text style={tw`text-lg text-black`}>ceui2</Text> */}
                </View>

                <View style={tw.style('flex ')}>
                    <TouchableOpacity>
                        <View style={tw.style('rounded-2xl bg-amber-300 dark:bg-lime-950 mt-6 p-6 mx-8',)}>
                            <Text style={tw.style('text-2xl text-red-500 dark:text-white')}>change theme</Text>

                        </View>
                    </TouchableOpacity>
                    {/* <ThemeModal></ThemeModal> */}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Setting;