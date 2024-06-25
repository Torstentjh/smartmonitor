import React, { Suspense, useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDeviceContext, useAppColorScheme } from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Canvas } from '@react-three/fiber/native';
import { OrbitControls } from '@react-three/drei/native';

import tw from '../../assets/tailwind'
import { AppContext } from '../../global/ContextProvider';
import Panel from '../../components/Panel';
import Userinfo from '../../store/userInfo';
// import Earth from '../../components/Three';
// import Model from '../../components/model/model';
import Trigger from '../../components/model/trigger';

const Manage = () => {
    const { isLogin } = Userinfo()
    return (
        <SafeAreaView>
            <View style={tw.style('dark:bg-dark-bg bg-light-bg w-full h-full items-center')}>
                <View style={tw.style('h-200 w-23/25 mt-5 rounded-lg flex flex-col items-center ')}>
                    <View style={tw.style('mb-auto')}></View>
                    {/* <Canvas>
                        <ambientLight></ambientLight>
                        <OrbitControls></OrbitControls>
                        <Suspense fallback={null}>
                            <Earth />
                        </Suspense>
                    </Canvas> */}
                    {
                        isLogin ? <Panel></Panel> : <View style={tw.style(' ')}>
                            <Text style={tw.style('text-center text-2xl font-bold text-lighttext dark:text-darktext mt-10')}>请先登录</Text>
                        </View>
                    }
                </View>
            </View>
        </SafeAreaView>

    );
};

export default Manage;