import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw, { useDeviceContext, useAppColorScheme } from 'twrnc';

import Info from '../pages/Info'
import Home from '../pages/Home'
import Setting from '../pages/Setting'
import theme from '../store/setting'

const Tab = createBottomTabNavigator();

const BtmNavigator = () => {
    const { initTheme } = theme()
    // const tabbarColor = initTheme === 'light' ? '#FFFAFA' : '#20232a';
    const [tabbarColor, setTabbarColor] = useState('#FFFAFA')
    useEffect(() => {
        setTabbarColor(initTheme === 'light' ? '#20232a' : '#FFFAFA')
    }, [initTheme])
    return (
        <>
            <Tab.Navigator screenOptions={{
                headerTitleAllowFontScaling: true,
                headerTitleAlign: 'left',
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
                        backgroundColor: tabbarColor,
                        height: 60,
                    },
                    headerShown: false
                }}></Tab.Screen>
                <Tab.Screen name='信息' component={Info} options={{
                    tabBarStyle: {
                        backgroundColor: tabbarColor,
                        height: 60,
                    },
                    headerShown: false
                }}></Tab.Screen>
                <Tab.Screen name='设置' component={Setting} options={{
                    tabBarStyle: {
                        backgroundColor: tabbarColor,
                        height: 60,
                    },
                    headerShown: false
                }}></Tab.Screen>
            </Tab.Navigator>
        </>
    );
};


export default BtmNavigator;