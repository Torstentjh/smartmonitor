import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigationState } from '@react-navigation/native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming, useDerivedValue, Extrapolation, interpolate } from 'react-native-reanimated';
import Icon from '@ant-design/react-native/lib/icon';

import tw from '../../assets/tailwind'
// import theme from '../../store/setting'
import DisplayMenu from '../../components/SideMenu/DisplayMenu';
import Overlay from '../../components/SideMenu/Overlay';
import Drawer from '../../components/SideMenu/Drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Userinfo from '../../store/userInfo';
import { useNavFilter } from '../../hooks/useNavigate';
import HardWareInfo from '../../components/HardwareData';
import HardWareCtrl from '../../components/HardwareCtrl';
import { AppContext } from '../../global/ContextProvider';


const Home = () => {
    const [stateHUM, setOpen] = useState(false);
    const [stateLED, setLED] = useState(false);
    const [stateBEEP, setBEEP] = useState(false);
    const [stateCtrl, setCtrl] = useState(false);
    const { isLogin } = Userinfo();
    const active = useSharedValue(false);
    const { navigate } = useNavFilter();
    const [colorScheme, toggleColorScheme, setColorScheme, buster, tw, socket, send] = useContext(AppContext);
    const animation = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: active.value ? withTiming(0.8) : withTiming(1)
                },
                {
                    translateX: active.value ? withSpring(300) : withTiming(0),
                },
            ],
            borderRadius: active.value ? withTiming(30) : withTiming(0),
        }
    })
    const sendMessage = (opt: any, change: boolean) => {
        const obj = { [opt]: change ? '0' : '1' }
        const mes = JSON.stringify(obj)
        socket.send(mes);
    };
    useEffect(() => {
        socket.onmessage = (event: any) => {
            // console.log('msg:', event.data);
            const obj = JSON.parse(event.data);
            const res = Object.keys(obj)[0];
            const changeVal = Boolean(obj[res] === '1');
            switch (res) {
                case 'stateHUM':
                    setOpen(changeVal);
                    break;
                case 'stateLED':
                    setLED(changeVal);
                    break;
                case 'stateBEEP':
                    setBEEP(changeVal);
                    break;
                case 'stateCtrl':
                    setCtrl(changeVal);
                    break;
                default:
                    break;
            }
        };
    })
    return (
        <SafeAreaView>
            <Drawer active={active} isLogin={isLogin}></Drawer>
            <Animated.View style={[animation, container.container]} >
                <View style={tw.style('w-full h-full dark:bg-dark-bg bg-light-bg')} >
                    <View style={tw.style('flex flex-row justify-between')}>
                        <DisplayMenu active={active}></DisplayMenu>
                        <Pressable onPress={() => {
                            navigate({ path: 'Message' })
                        }} style={tw.style(' justify-center items-center mb-4 mt-4')}>
                            <Icon name='bell' size={30} style={tw.style(' text-center mr-5 dark:text-slate-300 text-slate-600')}></Icon>
                        </Pressable>
                    </View>
                    <View style={tw.style('w-23/25 items-center mx-auto rounded-xl bg-content-l dark:bg-content-d flex justify-around pt-8',)}>
                        <HardWareInfo title={'温度'} value={'99'} scale={'℃'} style={tw.style('dark:bg-hardware-d')} />
                        <HardWareInfo title={'湿度'} value={'99'} scale={'%'} style={tw.style('dark:bg-hardware-d')} />
                        <HardWareInfo title={'气体浓度'} value={'99'} scale={'ppm'} style={tw.style('dark:bg-hardware-d')} />
                        <View style={tw.style('flex flex-row w-9/10 flex-wrap justify-start items-center pb-8')}>
                            <HardWareCtrl state={stateHUM} title={'加湿器'} func={() => { sendMessage('stateHUM', stateHUM) }} />
                            <HardWareCtrl state={stateLED} func={() => { sendMessage('stateLED', stateLED) }} title={'Led灯'} />
                            <HardWareCtrl state={stateBEEP} func={() => { sendMessage('stateBEEP', stateBEEP) }} title={'警报'} />
                            <HardWareCtrl state={stateCtrl} func={() => { sendMessage('stateCTRL', stateCtrl) }} title={'手动控制'} />

                        </View>
                    </View>
                    <Overlay active={active}></Overlay>
                </View>
            </Animated.View>
        </SafeAreaView>
    );
};
const container = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
})
export default Home;