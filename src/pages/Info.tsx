import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
const Info = () => {
    return (
        <SafeAreaView>
            <View style={tw`mt-1`}>
                <Text style={tw`text-lg text-black`}>ceui</Text>
                <Text style={tw`text-md text-black dark:text-white`}>Hello World</Text>
            </View>
            <Text>wqeqw</Text>
            <Text style={tw`text-md text-black dark:text-white`}>Hello World</Text>
        </SafeAreaView>

    );
};

export default Info;