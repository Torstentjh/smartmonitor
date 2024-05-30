import React, { createContext, useContext, useEffect } from 'react';
import {
    StatusBar,
    useColorScheme,
} from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import tw, { useDeviceContext, useAppColorScheme } from 'twrnc';
import theme from '../store/setting';
import BtmNavigator from './btmNavigator'
import { ThemeSetting } from '../utils/themeProvide';

const Stack = createStackNavigator();
const rootNavigator = () => {
    const { initTheme } = theme()
    // const the = initTheme === 'light' ? 'dark-content' : 'light-content'
    // const bg = initTheme === 'light' ? 'transparent' : 'transparent'
    return (
        <>
            <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent></StatusBar>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerTitleAlign: 'center',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    gestureEnabled: true,
                    headerShown: false,
                    gestureDirection: 'horizontal',
                    // headerShown:false
                }}>
                    <Stack.Screen name='Home' component={BtmNavigator} />

                </Stack.Navigator>

            </NavigationContainer>

        </>

    );
};


export default rootNavigator;