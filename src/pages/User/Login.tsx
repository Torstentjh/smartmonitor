import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from "@ant-design/react-native/lib/toast";


import tw from '../../assets/tailwind';
import { useNavFilter } from '../../hooks/useNavigate';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Userinfo from '../../store/userInfo';
import { toLogin } from '../../hooks/useHttpRequest';
import Card from '../../components/Card';
interface Secret {
    name: string;
    pwd: string;
}

function Login() {
    const [isCheckout, setIsCheckout] = useState(false);
    const [visible, setVisible] = useState(false);
    const tiptype = useRef<'fail' | 'loading' | 'success'>('fail');
    const [title, setTitle] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { isPending, data, isSuccess, error, isError } = toLogin({ name: username, pwd: password })
    const { setIsLogin } = Userinfo();
    const setStorage = async (key: string, val: object) => {
        try {
            const jsonValue = JSON.stringify(val);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (e) { }
    }
    const handleSubmit = async (userInfo: Secret) => {
        if (!isCheckout) {
            setVisible(true);
            setTitle('请勾选同意协议');
            return;
        }
        if (!userInfo.name || !userInfo.pwd) {
            setVisible(true);
            setTitle('请输入账号和密码');
            return;
        }
        if (isSuccess) {
            setTitle('登陆成功');
            tiptype.current = 'success';
            setVisible(true);
            setStorage('userInfo', data);
            setIsLogin(true);
            navigation.goBack();
        } else {
            setVisible(true);
            setTitle(error?.message!);
        }
    };
    const loginIcon = require('../../assets/global/login.png');
    const { navigation, navigate } = useNavFilter();

    return (
        <SafeAreaView>
            <View style={tw.style('bg-light-bg dark:bg-dark-bg w-full h-full')}>

                <View style={tw.style('items-center')}>
                    <Image source={loginIcon} style={tw.style('w-30 h-30 mt-20')}></Image>
                </View>
                <View style={tw.style(' mt-30 items-center')}>
                    <Input onSubmit={handleSubmit} setUsername={setUsername} setPassword={setPassword} username={username} password={password}></Input>
                </View>
                <Card type='tip' tipType={tiptype.current} visible={visible} title={title} duration={2} setVisible={setVisible} />
                <View style={tw.style('items-center h-full')}>
                    <Pressable style={tw.style('w-2/3 h-12 my-5 rounded-3xl justify-center bg-teal-500 shadow-md')} onPress={() => {
                        handleSubmit({ name: username, pwd: password })
                    }}>
                        <Text style={tw.style('text-center font-bold text-lg dark:text-darktext text-lighttext justify-center flex')}>登陆</Text>
                    </Pressable>

                    <View style={tw.style('flex-row justify-between w-2/3 my-8')}>
                        <Pressable onPress={() => {
                            navigate({ path: 'Register', params: { toRegister: '1' } })
                        }}><Text style={tw.style('font-bold text-base text-sky-500')}>立即注册</Text></Pressable>
                        <Pressable onPress={() => {
                            // navigate({ path: 'Register', params: { toChangePwd: '1' } })
                        }}>
                            <Text style={tw.style('font-bold text-base text-sky-500')}>忘记密码</Text>
                        </Pressable>
                    </View>

                    <View style={tw.style('flex-row flex w-2/3 mt-8 items-center')}>
                        <Checkbox isChecked={isCheckout} setIsChecked={setIsCheckout}></Checkbox>
                        <Text style={tw.style('ml-1 text-base text-slate-500 dark:text-slate-300')}>同意代表您同意《隐私政策》和《服务协议》</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    );
}

export default Login;