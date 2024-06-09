import React from 'react';
import { View, Text } from 'react-native';
import tw from '../../assets/tailwind';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
    return (
        <SafeAreaView>
            <View style={tw.style('dark:bg-dark-bg justify-center items-center w-full h-full')}>
                <Text style={tw.style('text-lg text-black')}>Profile</Text>
                <Text style={tw.style('text-lg text-black')}>Profile</Text>
                <Text style={tw.style('text-lg text-black')}>Profile</Text>
                <Text style={tw.style('text-lg text-black')}>Profile</Text>
                <Text style={tw.style('text-lg text-black')}>Profile</Text>
            </View>
        </SafeAreaView>
    );
};

export default Profile;