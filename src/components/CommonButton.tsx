import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from '../assets/tailwind';

interface ButtonProps {
    icon?: React.ReactNode;
    name: string;
    func?: () => void;
}

const CommontButton: React.FC<ButtonProps> = ({ icon, name, func }) => {
    return (
        <TouchableOpacity
            onPress={() => { if (func) func(); }}
            style={[tw.style('mt-1 rounded-lg overflow-hidden mb-1 border-b-2 border-gray-400')]}>
            <View style={tw.style('h-15 flex justify-center items-center rounded-lg')}>
                <View style={tw.style('flex-row items-center  w-full h-full rounded-lg ml-5')}>
                    {icon}
                    <Text style={tw.style('font-bold text-2xl dark:text-slate-100 ml-2')}>{name}</Text>
                </View>
                <Text style={tw.style('text-2xl absolute right-6')}>&gt;</Text>
            </View>
        </TouchableOpacity>
    );
};
export default CommontButton;
