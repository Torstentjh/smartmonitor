import React, { createContext, useContext, useEffect, useState } from 'react';
import { StatusBar, useColorScheme, } from 'react-native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { AppContext } from '../global/ContextProvider';
import themeSet from '../store/setting';

import BtmNavigator from './btmNavigator'
import Contacts from '../pages/Contacts';
import Setting from '../pages/Setting/Setting';
import Launcher from '../pages/Common/launch';
import Firstlauncher from '../pages/Common/transition';
import Profile from '../pages/User/Profile';
import Login from '../pages/User/Login';
import Register from '../pages/User/Register';



export type RootStackParamList = {
    Home: undefined;
    Register: undefined;
    Changeuser: undefined;
    Login: undefined;
    ChangePwd: undefined;
    Setting: undefined;
    Launcher: undefined;
    Contacts: undefined;
    Profile: undefined
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
                    <Stack.Screen name='Contacts' component={Contacts} />
                    <Stack.Screen name='Setting' component={Setting} />
                    <Stack.Screen name='Profile' component={Profile} options={{
                        headerShown: true,
                        headerTitle: '个人资料',
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: clor() },
                        headerTitleStyle: { color: colorScheme === 'light' ? '#475569' : '#c6cbef', },
                        headerTintColor: colorScheme === 'light' ? '#475569' : '#c6cbef',
                    }} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Register' component={Register} />
                </Stack.Navigator>

            </NavigationContainer>

        </>

    );
};


export default rootNavigator;