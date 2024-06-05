import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, Dimensions, Image } from 'react-native';
import tw from '../../assets/tailwind';
import { StackActions } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';
import usseNavigation from '../../hooks/useNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';


const Launcher = () => {
    const windowWidth = Dimensions.get('window').width * 0.2;
    const startRef = useRef<any>(null);
    const jumpRef = useRef<any>(null);
    const navi = usseNavigation()
    const [jumpTime, setJumpTime] = useState(3);
    useEffect(() => {
        jumpRef.current = setInterval(() => {
            setJumpTime((jumpTime) => jumpTime - 1);
        }, 1000);
        startRef.current = setTimeout(() => {
            navi.dispatch(StackActions.replace('Home'))
        }, 3000);
    }, [])
    const cleanup = () => {
        clearTimeout(startRef.current)
        clearInterval(jumpRef.current)
        navi.dispatch(StackActions.replace('Home'))
    }
    return (
        <SafeAreaView>
            <View style={tw.style('w-full h-full')}>
                <Image style={tw.style('w-full h-full')} source={require('../../assets/global/launch.png')}>
                </Image>
                <Pressable style={[tw.style('shadow-lg bg-slate-900 opacity-50 h-12 rounded-3xl   flex absolute right-10 top-8 justify-center  items-center'), { width: windowWidth }]} onPress={() => { cleanup() }}>
                    <Text style={tw.style('justify-center text-lg font-bold text-teal-50')}>跳过 {jumpTime}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Launcher;