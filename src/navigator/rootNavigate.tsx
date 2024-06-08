import React, { createContext, useContext, useEffect, useState } from 'react';
import { StatusBar, useColorScheme, } from 'react-native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import themeSet from '../store/setting';
import BtmNavigator from './btmNavigator'
import { ThemeSetting } from '../utils/themeProvide';
import Another from '../pages/Another';
import Setting from '../pages/Setting/Setting';
import Launcher from '../pages/Common/launch';
import Firstlauncher from '../pages/Common/transition';
import { AppContext } from '../global/ThemeProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';


export type RootStackParamList = {
    Home: undefined;
    Register: undefined;
    Detail: undefined;
    Changeuser: undefined;
    Myhome: undefined;
    LoginUser: undefined;
    ChangePwd: undefined;
    Setting: undefined;
    Launcher: undefined;
    Firstlauncher: undefined;
}
type Props = {
    firstLoad: boolean
}
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

//需要返回黑白颜色，fff白色背景用黑字，000黑色背景用白字
const Stack = createStackNavigator<RootStackParamList>();


const rootNavigator = ({ firstLoad }: Props) => {
    const { displayMenu } = themeSet();
    const clor = () => {
        if (displayMenu) {
            return colorScheme === 'light' ? '#c6cbef' : '#475569'
        } else {
            return colorScheme === 'light' ? '#ffffff' : '#161c24'
        }
    }
    const [theme, setTheme] = useState('light');
    const [colorScheme, toggleColorScheme, setColorScheme, buster, tw] = useContext(AppContext);
    function LoadPage(): React.JSX.Element {
        // return firstLoad ? <Launcher></Launcher> : <Firstlauncher></Firstlauncher>
        return firstLoad ? <Firstlauncher></Firstlauncher> : <Launcher></Launcher>
    }
    return (
        <>
            <StatusBar backgroundColor={clor()} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} translucent></StatusBar>
            <NavigationContainer >
                <Stack.Navigator key={tw.memoBuster} screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    gestureEnabled: true,
                    headerShown: false,
                    gestureDirection: 'horizontal',
                    detachPreviousScreen: false,
                }}>
                    <Stack.Screen name='Launcher' component={LoadPage} />
                    <Stack.Screen name='Home' component={BtmNavigator} />
                    <Stack.Screen name='Detail' component={Another} />
                    <Stack.Screen name='Setting' component={Setting} />
                </Stack.Navigator>

            </NavigationContainer>

        </>

    );
};


export default rootNavigator;