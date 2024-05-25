import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Info from '../pages/Info'
import Home from '../pages/Home'
import Setting from '../pages/Setting'

const Tab = createBottomTabNavigator();

const BtmNavigator = () => {
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
                        backgroundColor: '#FFFAFA',
                        height: 60,
                    },
                    headerShown: false
                }}></Tab.Screen>
                <Tab.Screen name='信息' component={Info} options={{
                    tabBarStyle: {
                        backgroundColor: '#FFFAFA',
                        height: 60,
                    },
                    headerShown: false
                }}></Tab.Screen>
                <Tab.Screen name='设置' component={Setting} options={{
                    tabBarStyle: {
                        backgroundColor: '#FFFAFA',
                        height: 60,
                    },
                    headerShown: false
                }}></Tab.Screen>
            </Tab.Navigator>
        </>
    );
};


export default BtmNavigator;