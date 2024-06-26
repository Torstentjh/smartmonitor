import React, { memo, useCallback, useContext, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import tw from '../../assets/tailwind';
import { SafeAreaView } from 'react-native-safe-area-context';

// import theme from '../../store/setting'
import { AppContext } from '../../global/ContextProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from './Icon';


const Change = () => {
    const setTheme = (value: any) => {
        const setData = async (value: any) => {
            try {
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem('InitTheme', jsonValue);
            } catch (e) {
                // error reading value
            }
        };
        setData(value);
    }
    // const { toggleTheme } = theme();
    const { colorScheme, toggleColorScheme, setColorScheme, buster } = useContext(AppContext);
    return (
        <View style={tw.style('dark:bg-themedarwer-l bg-themedarwer-l w-full h-full items-center')}>

            <Icon theme={colorScheme}></Icon>
            <Text style={tw.style('text-lg text-white dark:text-white font-bold')}>当前主题为{colorScheme}</Text>

            <TouchableOpacity style={tw.style('rounded-xl bg-slate-200 dark:bg-darwer-dark text-center items-center w-36 h-12 m-10')} onPress={() => {
                setTheme(colorScheme === 'light' ? 'dark' : 'light')
                toggleColorScheme();
            }}>
                <Text style={tw.style('text-black align-middle text-center dark:text-white font-bold text-lg h-full')}>切换主题</Text>
            </TouchableOpacity>
        </View>

    );
};

export default Change;