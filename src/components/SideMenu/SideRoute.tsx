import React, { act } from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from '@ant-design/react-native/lib/icon';
// import  {IConDemo}  from '@ant-design/react-native/lib/icon';
import { OutlineGlyphMapType } from '@ant-design/icons-react-native';

import tw from '../../assets/tailwind';
import { RootStackParamList } from '../../navigator/rootNavigate';
import useNavigationHook from '../../hooks/useNavigation';
import { SharedValue } from 'react-native-reanimated';
import theme from '../../store/setting';
type Props = {
    title: string;
    icon: OutlineGlyphMapType;
    route: string;
    active?: SharedValue<boolean>;
}

const SideRoute = (props: Props) => {
    const { toggleMenu } = theme()
    const Navigation = useNavigationHook();
    const { title, icon, route, active } = props;
    function routeTo() {

    }
    return (
        <Pressable style={tw.style('flex mt-6 w-2/5  rounded-2xl h-12')} onPress={() => {
            Navigation.navigate('Setting');
            // Navigation.reset({
            //     index: 0,
            //     routes: [{ name: 'Home' }]
            // })
            toggleMenu();
            active!.value = false;
        }}>
            <View style={tw.style('flex items-center flex-row justify-start ')}>
                <Icon style={tw.style('ml-2 mr-6  dark:text-slate-400 text-gray-600')} name={icon} size={40} ></Icon>
                <Text style={tw.style('text-lg dark:text-white text-gray-600 font-bold tracking-widest')}>{title}</Text>
            </View>
        </Pressable>
    );
};

export default SideRoute;