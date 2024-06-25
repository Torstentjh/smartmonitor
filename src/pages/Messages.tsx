import React, { Suspense, useState } from 'react';
import { View, Text } from 'react-native';
import tw from '../assets/tailwind';

const Message = () => {
    return (
        <View style={tw.style('bg-light-bg dark:bg-dark-bg h-full')}>
            <Text style={tw.style('text-3xl font-bold text-lighttext dark:text-darktext text-center mt-5')}>Message</Text>
        </View>
    );
};

export default Message;