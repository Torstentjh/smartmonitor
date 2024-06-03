import React, { createContext, useContext, useEffect } from 'react';
import { StatusBar, useColorScheme, } from 'react-native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import tw from '../assets/tailwind';
import tw from 'twrnc';


import theme from '../store/setting';
import BtmNavigator from './btmNavigator'
import { ThemeSetting } from '../utils/themeProvide';
import Another from '../pages/Another';
import Second from '../pages/Second';


export type RootStackParamList = {
    Home: undefined;
    Register: undefined;
    Detail: undefined;
    Changeuser: undefined;
    Myhome: undefined;
    LoginUser: undefined;
    ChangePwd: undefined;
    Setting: undefined;
}

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;


const Stack = createStackNavigator<RootStackParamList>();
const rootNavigator = () => {
    return (
        <>
            <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent></StatusBar>
            <NavigationContainer >
                <Stack.Navigator key={tw.memoBuster} screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    gestureEnabled: true,
                    headerShown: false,
                    gestureDirection: 'horizontal',
                    detachPreviousScreen: false,
                }}>
                    <Stack.Screen name='Home' component={BtmNavigator} />
                    <Stack.Screen name='Detail' component={Another} />
                    <Stack.Screen name='Setting' component={Second} />
                </Stack.Navigator>

            </NavigationContainer>

        </>

    );
};


export default rootNavigator;