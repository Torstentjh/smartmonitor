import React, { useState } from 'react';
import { View, Text, Vibration } from 'react-native';
import tw from '../assets/tailwind';
import Switch from '@ant-design/react-native/lib/switch';
type prop = {
    state: boolean
    title: string
    func: () => void
}
const HardWareCtrl = ({ state, title, func }: prop) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <View style={tw.style('ml-auto mr-auto w-9/20 h-30 rounded-2xl items-center justify-center mb-5 mt-5 shadow-md dark:bg-slate-500 bg-slate-200')}>
            <Switch
                style={tw.style('w-18')}
                checked={state}
                // defaultChecked={stateHUM}
                checkedChildren={<Text style={tw.style('text-lg text-lighttext dark:text-lighttext')}>开启</Text>}
                unCheckedChildren={<Text style={tw.style('text-lg text-lighttext dark:text-lighttext')}>关闭</Text>}
                onChange={(checked) => {
                    setIsOpen(checked);
                    func();
                    // Vibration.vibrate()
                }} />
            <Text style={tw.style('text-lg text-lighttext dark:text-darktext mt-3')}>{title}{isOpen ? '打开' : '关闭'}</Text>
        </View>
    );
};

export default HardWareCtrl;