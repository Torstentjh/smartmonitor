import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicatorBase } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Manage from '../pages/Mange'
import Home from '../pages/Home'

import theme from '../store/setting'
import Icon from "@ant-design/react-native/lib/icon";
import { AppContext } from '../global/ThemeProvider';

const Tab = createBottomTabNavigator();

const BtmNavigator = () => {
    const { initTabBarColor, displayMenu } = theme();
    const [colorScheme, toggleColorScheme, setColorScheme, buster, tw] = useContext(AppContext);

    return (
        <>
            <Tab.Navigator screenOptions={{
                headerTitleAllowFontScaling: true,
                headerTitleAlign: 'left',
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 17,
                    fontWeight: 'bold',
                },
                // headerShown:false
                headerStyle: {
                },
            }}>
                <Tab.Screen name='首页' component={Home} options={{
                    tabBarStyle: {
                        backgroundColor: colorScheme === 'light' ? '#ffffff' : '#161c24',
                        height: displayMenu ? 0 : 50,
                    },
                    tabBarIcon: (({ focused, size, }) => (
                        <Icon name='home' style={tw.style('text-slate-500', focused && 'text-blue-600')} size={20}></Icon>
                    ))
                }}></Tab.Screen>
                <Tab.Screen name='管理' component={Manage} options={{
                    tabBarStyle: {
                        backgroundColor: colorScheme === 'light' ? '#ffffff' : '#161c24',
                        height: 50,
                    },
                    tabBarIcon: (({ focused, size, }) => (
                        <Icon name='apartment' style={tw.style('text-slate-500', focused && 'text-blue-600')} size={20}></Icon>
                    ))
                }}></Tab.Screen>
            </Tab.Navigator>
        </>
    );
};


export default BtmNavigator;