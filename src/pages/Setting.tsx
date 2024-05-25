import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
const Setting = () => {
    return (
        <SafeAreaView>
            <View style={tw` justify-center items-center bg-white`}>
                <Text style={tw`text-lg text-black`}>ceui2</Text>
            </View>
        </SafeAreaView>

    );
};

export default Setting;