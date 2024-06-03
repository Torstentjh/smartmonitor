import { Button } from '@ant-design/react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';


const ComponentName = (props: DrawerContentComponentProps) => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-lg text-black`}>ComponentName</Text>
      <Button onPress={() => {
        props.navigation.navigate('Info')
      }}></Button>
    </View>
  );
};

export default ComponentName;
