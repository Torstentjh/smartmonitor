import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDeviceContext, useAppColorScheme } from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';


import tw from '../../assets/tailwind'
// import theme from '../../store/setting'
import { AppContext } from '../../global/ContextProvider';


const Manage = () => {

    return (
        <SafeAreaView>

            <View style={tw.style('dark:bg-dark-bg bg-light-bg w-full h-full')}>
                <View style={tw``}>
                    <Text style={tw`text-lg text-black dark:text-red-500`}>c222ui</Text>
                    <Text style={tw` text-lg text-black dark:text-white`}>Hello World</Text>
                </View>
                <Text style={tw`text-lg text-black dark:text-white`}>Hello World</Text>

            </View>
        </SafeAreaView>

    );
};

export default Manage;