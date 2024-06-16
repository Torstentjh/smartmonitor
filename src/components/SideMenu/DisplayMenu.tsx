import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from '@ant-design/react-native/lib/icon';
import tw from '../../assets/tailwind';
import { SharedValue } from 'react-native-reanimated';
import theme from '../../store/setting'
type Props = {
    active: SharedValue<boolean>
}

const DisplayMenu = ({ active }: Props) => {
    const { toggleMenu } = theme()
    return (
        <View style={tw.style('dark:bg-dark-bg bg-light-bg mb-4 mt-4')}>
            <Pressable style={tw.style(' w-24')} onPress={() => {
                active.value = true;
                toggleMenu();
            }}>
                <Icon style={tw.style(' ml-5 dark:text-slate-300 text-slate-600')} name="bars" size={50} ></Icon>
            </Pressable>
        </View>
    );
};

export default DisplayMenu;