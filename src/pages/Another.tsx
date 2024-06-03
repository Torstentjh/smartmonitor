import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

const Anther = () => {
    return (
        <SafeAreaView>
            <View style={tw.style('justify-center items-center bg-white dark:bg-black')}>
                <Text style={tw.style('text-lg text-black')}>anther</Text>
            </View>
        </SafeAreaView>

    );
};

export default Anther;