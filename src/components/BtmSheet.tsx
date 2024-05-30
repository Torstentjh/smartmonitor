import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import DropMenu from './DropMenu';

const BtmSheet = () => {

    return (
        <>
            <DropMenu></DropMenu>
            <View style={tw` bg-white mt-5 absolute`}>
                <View style={tw`bg-white`}>
                    <Text style={tw`text-lg text-black`}>ComponentName</Text>
                </View>
            </View>
        </>

    );
};

export default BtmSheet;