import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleProp, ViewStyle, FlexStyle, ImageStyle, TextStyle, } from 'react-native';
import tw from '../assets/tailwind';


type Style = StyleProp<ViewStyle | ImageStyle | TextStyle | FlexStyle>
type prop = {
    title?: string
    value?: string
    scale?: string
    style?: Style
}

const HardWareInfo = ({ title, value, scale, style }: prop) => {
    const [currentTime, _] = useState(new Date());
    const formattedTime = currentTime.toLocaleTimeString('zh-CN', {
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
    });
    return (
        <View style={[tw.style('rounded-lg shadow-md  overflow-hidden w-9/10 mb-8',), style]}>
            <View style={tw.style('mt-3 justify-center')}>
                <View style={tw.style('flex-row justify-between mb-2')}>
                    <Text style={tw.style(' ml-3 text-xl text-lighttext dark:text-darktext font-bold ')}>{value}   {scale}</Text>
                    <Text style={tw.style('mr-5 text-xl text-lighttext dark:text-darktext font-bold')}>{title}</Text>
                </View>
                <View style={tw.style('border-b w-19/20 mx-auto border-slate-500 dark:border-gray-400')}></View>
            </View>
            <View style={tw.style('mb-3 mt-2 justify-center')}>
                <Text style={tw.style('ml-3 text-xl text-lighttext dark:text-darktext')}>{formattedTime}</Text>
            </View>
        </View >
    );
};

export default HardWareInfo;