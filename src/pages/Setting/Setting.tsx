import React, { useCallback, useContext, useRef, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomSheet from '@gorhom/bottom-sheet';
import Icon from '@ant-design/react-native/lib/icon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from '../../assets/tailwind';
import BottomDrawer from '../../components/changeTheme/BottomSheet';
import CommontButton from '../../components/CommonButton';
import { useNavFilter } from '../../hooks/useNavigate'
import Userinfo from '../../store/userInfo';
import { AppContext } from '../../global/ContextProvider';
import Card from '../../components/Card';

const Setting = () => {
    const [colorScheme, toggleColorScheme, setColorScheme, buster, tw, socket] = useContext(AppContext);
    const { setIsLogin, isLogin } = Userinfo();
    const [visible, setVisible] = useState(false);
    const { navigation } = useNavFilter()
    const setStorage = async (key: string, val: object) => {
        try {
            const jsonValue = JSON.stringify(val);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
        }
    }
    const bottomSheetRef = useRef<BottomSheet>(null);
    const handleSheetChanges = useCallback((index: number) => {
        bottomSheetRef.current?.snapToIndex(index);
    }, []);
    return (
        <SafeAreaView>
            <View style={[tw.style('dark:bg-dark-bg bg-light-bg w-full h-full items-center')]}>
                <Card type='tip' tipType='success' visible={visible} setVisible={setVisible} title='注销成功' />
                <View style={[tw.style('rounded-xl overflow-hidden mt-5 w-11/12 bg-content-l dark:bg-content-d')]}>
                    <CommontButton icon={<Icon name="reload" size={24} color="#00CED1" />} func={() => {
                        handleSheetChanges(0)
                    }} name={'切换主题'}></CommontButton>
                    <CommontButton icon={<Icon name="menu" size={24} color="#00CED1" />} name={'切换语言'}></CommontButton>
                    <CommontButton icon={<Icon name="wechat" size={24} color="#00CED1" />} name={'切换地区'}></CommontButton>
                    <CommontButton icon={<Icon name="github" size={24} color="#00CED1" />} name={'隐私设置'}></CommontButton>
                </View>
                <Pressable style={[tw.style('absolute bottom-20 rounded-full items-center dark:bg-slate-500 bg-teal-500 shadow-md'), { left: '20%', width: '60%', bottom: '12%' }]} onPress={() => {
                    setVisible(true);
                    setStorage('userInfo', {})
                    setIsLogin(false);
                    if (socket) {
                        socket.close();
                    }
                    navigation.goBack();
                }}>
                    <Text style={tw.style('text-lighttext dark:text-darktext font-bold text-lg text-center h-15 justify-center align-middle')}>注销登陆</Text>
                </Pressable>
                <BottomDrawer bottomSheetRef={bottomSheetRef} handleSheetChanges={handleSheetChanges}></BottomDrawer>
            </View>
        </SafeAreaView>

    );
};


export default Setting;