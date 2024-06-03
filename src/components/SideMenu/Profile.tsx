import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from '../../assets/tailwind';

const Profile = () => {
    return (
        <View style={tw.style('')}>
            <Image style={tw.style('overflow-hidden w-24 h-24 rounded-full')} source={require('../../assets/global/avatar.png')}></Image>
            <Text style={tw.style(' text-2xl font-bold dark:text-slate-200 mt-3')}>Joe</Text>
            <View style={tw.style('dark:border-slate-500  border-b-2 w-2/5 mt-3')}></View>
        </View>
    );
};

export default Profile;