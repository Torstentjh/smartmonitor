import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from '../../assets/tailwind';

import SideRoute from './SideRoute';
import Profile from './Profile';
import { SharedValue } from 'react-native-reanimated';
import theme from '../../store/setting'
type Props = {
    active: SharedValue<boolean>
    isLogin: boolean
}

const co = '#2e364b'
const Drawer = ({ active, isLogin }: Props) => {
    // const { toggleMenu } = theme()
    const insets = useSafeAreaInsets();
    return (
        <View style={[style.drawer, { paddingTop: insets.top }]} >
            <View style={[tw.style('w-full h-full dark:bg-darwer-dark bg-darwer-light ')]}>
                <View style={tw.style('mt-30 ml-8')}>
                    <Profile isLogin={isLogin}></Profile>
                    <SideRoute active={active} title='Profile' icon='user' route='Profile'></SideRoute>
                    <SideRoute active={active} title='Contacts' icon='comment' route='Contacts'></SideRoute>
                    <SideRoute active={active} title='Setting' icon='setting' route='Setting'></SideRoute>
                </View>
            </View>

        </View>


    );
};
const style = StyleSheet.create({
    drawer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -99,
    },
    content: {
        backgroundColor: co
    }
})
export default Drawer;