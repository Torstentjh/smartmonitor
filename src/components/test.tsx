import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';

const ComponentName = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-lg text-black`}>ComponentName</Text>
    </View>
  );
};

export default ComponentName;