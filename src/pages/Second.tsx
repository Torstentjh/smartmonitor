import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';

const Second = () => {
    return (
        <SafeAreaView>
            <View style={tw.style('justify-center items-center bg-white dark:bg-black')}>
                <Text style={tw.style('text-lg text-black')}>Second</Text>
            </View>
        </SafeAreaView>

    );
};

export default Second;