import React from 'react';
import { View, Text, TouchableOpacity, StyleProp, ViewStyle, FlexStyle, ImageStyle, TextStyle, Pressable } from 'react-native';
import tw from '../assets/tailwind';

type Style = StyleProp<ViewStyle | ImageStyle | TextStyle | FlexStyle>

interface ButtonProps {
    icon?: React.ReactNode;
    name: string;
    func?: (prop?: any) => void;
    style?: Style;
}

const CommontButton: React.FC<ButtonProps> = ({ icon, name, func, style }) => {
    return (
        <Pressable
            onPress={() => { if (func) func(); }}
            style={[tw.style('mt-1 rounded-lg overflow-hidden mb-1 border-b-2 border-gray-400'), style]}>
            <View style={tw.style('h-15 flex justify-center items-center rounded-lg')}>
                <View style={tw.style('flex-row items-center  w-full h-full rounded-lg ml-5')}>
                    {icon}
                    <Text style={tw.style('font-bold text-2xl dark:text-slate-100 ml-2')}>{name}</Text>
                </View>
                <Text style={tw.style('text-2xl absolute right-6')}>&gt;</Text>
            </View>
        </Pressable>
    );
};
export default CommontButton;
