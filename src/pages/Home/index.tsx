import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigationState } from '@react-navigation/native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming, useDerivedValue, Extrapolation, interpolate } from 'react-native-reanimated';

import tw from '../../assets/tailwind'
// import theme from '../../store/setting'
import DisplayMenu from '../../components/SideMenu/DisplayMenu';
import Overlay from '../../components/SideMenu/Overlay';
import Drawer from '../../components/SideMenu/Drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Userinfo from '../../store/userInfo';



const Home = () => {
    const { isLogin } = Userinfo();
    const active = useSharedValue(false);
    const animation = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: active.value ? withTiming(0.8) : withTiming(1)
                },
                {
                    translateX: active.value ? withSpring(300) : withTiming(0),
                },
            ],
            borderRadius: active.value ? withTiming(30) : withTiming(0),
        }
    })
    return (
        <SafeAreaView>
            <Drawer active={active} isLogin={isLogin}></Drawer>
            <Animated.View style={[animation, container.container]} >
                <View style={tw.style('w-full h-full dark:bg-dark-bg bg-light-bg')} >
                    <DisplayMenu active={active}></DisplayMenu>
                    <Text style={tw.style('mt-5 mb-5 text-red-400 dark:text-green-600')}>ComponentName</Text>
                    <Text style={tw.style('mt-5 mb-5 text-red-400 dark:text-green-600')}>ComponentName</Text>

                    <Text style={tw.style('mt-10 mb-10 text-red-400 dark:text-green-600')}>ComponentName</Text>
                    <Text style={tw.style('mt-10 mb-10 text-red-400 dark:text-green-600')}>ComponentName</Text>
                    <Text style={tw.style('mt-10 mb-10 text-red-400 dark:text-green-600')}>ComponentName</Text>
                    <Text style={tw.style('mt-10 mb-10 text-red-400 dark:text-green-600')}>ComponentName</Text>
                    <Text style={tw.style('mt-10 mb-10 text-red-400 dark:text-green-600')}>ComponentName</Text>
                    <Pressable style={tw.style('bg-teal-500')} onPress={() => {

                    }}>
                        <Text style={tw.style('text-white')}>Pressable</Text>
                    </Pressable>
                    <Overlay active={active}></Overlay>
                </View>
            </Animated.View>
        </SafeAreaView>
    );
};
const container = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
})
export default Home;