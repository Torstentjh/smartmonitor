import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, Dimensions, Image, TouchableHighlight } from 'react-native';
import tw from '../../assets/tailwind';
import { StackActions } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const FirstLauncher = () => {

    const windowWidth = Dimensions.get('window').width * 0.2;
    const navigate = useNavigation()
    const cleanup = () => {
        // clearTimeout(startRef.current)
        // clearInterval(jumpRef.current)
        navigate.dispatch(StackActions.replace('Home'))
        const setFirst = async () => {
            try {
                const value = await AsyncStorage.getItem('FirstLoad');
                if (value !== null) {
                    // value previously stored
                    // await AsyncStorage.setItem('FirstLoad', true);
                    const jsonValue = JSON.stringify(false);
                    await AsyncStorage.setItem('FirstLoad', jsonValue);
                }
            } catch (e) {
                // error reading value
            }
        }
        setFirst();
    }

    return (
        <SafeAreaView>
            <View style={tw.style('w-full h-full')}>

                <Pressable style={[tw.style('shadow-lg bg-slate-900 opacity-50 h-12 rounded-3xl   flex absolute right-10 top-8 justify-center  items-center'), { width: windowWidth }]} onPress={() => { cleanup() }}>
                    <Text style={tw.style('justify-center text-lg font-bold text-teal-50')}>过渡用的</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default FirstLauncher;