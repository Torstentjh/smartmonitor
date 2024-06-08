import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Easing } from 'react-native-reanimated';
import BottomDrawer from '../../components/changeTheme/BottomSheet';
import Button from '@ant-design/react-native/lib/button';
import Modal from '@ant-design/react-native/lib/modal'
import tw from '../../assets/tailwind';
import Change from '../../components/changeTheme';
import CommontButton from '../../components/CommonButton';
import Icon from '@ant-design/react-native/lib/icon';
import BottomSheet from '@gorhom/bottom-sheet';

function Btn({ bbb }: { bbb: () => void }) {
    const dis = useSafeAreaInsets()
    // const navige = useNavFilter()
    const onButtonClick = () => {
        Modal.alert('注销登陆', '确定要注销登陆?', [
            { text: 'Cancel', onPress: () => console.log('cancel'), style: 'cancel' },
            { text: 'OK', onPress: () => bbb() },
        ])
    }
    return (
        <View style={[tw.style(' absolute bottom-20'), { left: '25%', width: '50%', bottom: '10%' }]}>
            <Button
                style={tw.style('rounded-2xl h-13')}
                type="primary"
                onPress={onButtonClick}
            >注销登陆</Button>
        </View>
    )
}

const Setting = () => {
    const bb = () => {
        console.log('1');
    }

    const bottomSheetRef = useRef<BottomSheet>(null);
    const handleSheetChanges = useCallback((index: number) => {
        bottomSheetRef.current?.snapToIndex(index);
    }, []);
    return (
        <SafeAreaView>
            <View style={[tw.style('dark:bg-dark-bg bg-light-bg w-full h-full items-center')]}>
                <View style={[tw.style('rounded-xl overflow-hidden mt-5 w-11/12 bg-content-l dark:bg-content-d')]}>
                    <CommontButton icon={<Icon name="reload" size={24} color="#00CED1" />} func={() => {
                        handleSheetChanges(0)
                    }} name={'切换主题'}></CommontButton>
                    <CommontButton icon={<Icon name="menu" size={24} color="#00CED1" />} name={'切换语言'}></CommontButton>
                    <CommontButton icon={<Icon name="wechat" size={24} color="#00CED1" />} name={'切换地区'}></CommontButton>
                    <CommontButton icon={<Icon name="github" size={24} color="#00CED1" />} name={'隐私设置'}></CommontButton>
                </View>
                <Btn bbb={bb}></Btn>
                <BottomDrawer bottomSheetRef={bottomSheetRef} handleSheetChanges={handleSheetChanges}></BottomDrawer>
            </View>
        </SafeAreaView>

    );
};


export default Setting;