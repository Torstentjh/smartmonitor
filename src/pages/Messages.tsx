import React from 'react';
import { View, Text } from 'react-native';
import tw from '../assets/tailwind';

const Message = () => {
    return (
        <View style={tw.style('justify-center items-center bg-white')}>
            <Text style={tw.style('text-lg text-black')}>Message</Text>
            <Text style={tw.style('text-lg text-black')}>Message</Text>
            <Text style={tw.style('text-lg text-black')}>Message</Text>
            <Text style={tw.style('text-lg text-black')}>Message</Text>
        </View>
    );
};

export default Message;