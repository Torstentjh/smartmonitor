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
import Launcher from '../pages/Common/launch';
import Firstlauncher from '../pages/Common/transition';


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
    function LoadPage(): React.JSX.Element {
        console.log('路由的时候这个值为多少', firstLoad);

        return firstLoad ? <Launcher></Launcher> : <Firstlauncher></Firstlauncher>
        // return firstLoad ? <Firstlauncher></Firstlauncher> : <Launcher></Launcher>
    }
    return (
        <>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} translucent></StatusBar>
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
                    <Stack.Screen name='Setting' component={Second} />
                </Stack.Navigator>

            </NavigationContainer>

        </>

    );
};


export default rootNavigator;