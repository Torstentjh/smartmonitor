import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../../assets/tailwind';

const Register = () => {
    return (
        <SafeAreaView>
            <View style={tw.style('justify-center items-center bg-white')}>
                <Text style={tw.style('text-lg text-black')}>Register</Text>
            </View>
        </SafeAreaView>
    );
};

export default Register;