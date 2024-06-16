import React from 'react';
import { View, Text, TouchableOpacity, StyleProp, ViewStyle, FlexStyle, ImageStyle, TextStyle, Pressable } from 'react-native';
import tw from '../assets/tailwind';

type Style = StyleProp<ViewStyle | ImageStyle | TextStyle | FlexStyle>

type ButtonProps = {
    icon?: React.ReactNode;
    name: string;
    func?: (prop?: any) => void;
    style?: Style;
    rightContent?: React.ReactNode;
}

const CommontButton: React.FC<ButtonProps> = ({ icon, name, func, style, rightContent }) => {
    return (
        <Pressable
            onPress={() => { if (func) func(); }}
            style={[tw.style('mt-1 rounded-lg overflow-hidden mb-1 border-b-2 border-gray-400'), style]}>
            <View style={tw.style('h-15 flex justify-center items-center rounded-lg')}>
                <View style={tw.style('flex-row items-center  w-full h-full rounded-lg ml-5')}>
                    {icon}
                    <Text style={tw.style('font-bold text-2xl dark:text-slate-100 ml-2')}>{name}</Text>
                </View>
                {/* <Text style={tw.style('absolute right-6 text-2xl dark:text-slate-100')}>&gt;</Text> */}
                {rightContent ? (
                    <View style={tw.style('absolute right-8')}>
                        {rightContent}
                    </View>
                ) : (
                    <Text style={tw.style('absolute right-8 text-2xl dark:text-slate-100')}>&gt;</Text>
                )}
            </View>
        </Pressable>
    );
};
export default CommontButton;
