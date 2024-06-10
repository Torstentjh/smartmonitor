import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from "@ant-design/react-native/lib/toast";


import tw from '../../assets/tailwind';
import { useNavFilter } from '../../hooks/useNavigate';
import toLogin from "../../hooks/useRequest";
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Userinfo from '../../store/userInfo';

interface Secret {
    name: string;
    pwd: string;
}

function Login() {
    const [isCheckout, setIsCheckout] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setIsLogin } = Userinfo();
    const setStorage = async (key: string, val: object) => {
        try {
            // const value = await AsyncStorage.getItem(key);
            const jsonValue = JSON.stringify(val);
            await AsyncStorage.setItem(key, jsonValue);
            //   setfirstLoad(JSON.parse(jsonValue))
        } catch (e) {
            // error reading value
        }
    }
    const handleSubmit = async (userInfo: Secret) => {
        if (!userInfo.name || !userInfo.pwd) {
            Toast.fail('账号或密码不能为空', 0.5)
            return;
        }
        if (!isCheckout) {
            Toast.fail('请先同意用户协议', 0.5)
            return;
        }
        const res = await toLogin({ body: { name: username, pwd: password }, method: 'POST' })
        if (res.status != 200) {
            Toast.fail(res.message, 0.4)
        } else {
            // if (res.isMenber == 1) {
            //     setHome()
            // }
            //这里设置成员，也存进去，然后取了用
            // setInfo(res)
            //后面改用本地存储，持久化登陆状态
            // setIsLogin()
            //这里也是判断了登陆状态然后渲染主页的内容，也需要持久化
            setStorage('userInfo', res);
            setIsLogin(true);
            Toast.success('登陆成功', 1);
            navigation.goBack();

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
                    <Input onSubmit={handleSubmit} setUsername={setUsername} setPassword={setPassword} username={username} password={password} isCheckout={isCheckout}></Input>
                </View>
                <View style={tw.style('items-center')}>
                    <Pressable style={tw.style('w-2/3 h-12 my-5 rounded-3xl justify-center bg-teal-500')} onPress={() => {
                        handleSubmit({ name: username, pwd: password })
                    }}>
                        <Text style={tw.style('text-center font-bold text-lg dark:text-darktext text-lighttext justify-center flex')}>登陆</Text>
                    </Pressable>

                    <View style={tw.style('flex-row justify-between w-2/3 my-8')}>
                        <Pressable onPress={() => {
                            navigate({ path: 'Register', params: { toRegister: '1' } })
                        }}><Text style={tw.style('font-bold text-base dark:text-darktext text-lighttext')}>立即注册</Text></Pressable>
                        <Pressable onPress={() => {
                            // navigate({ path: 'Register', params: { toChangePwd: '1' } })
                        }}>
                            <Text style={tw.style('font-bold text-base dark:text-darktext text-lighttext')}>忘记密码</Text>
                        </Pressable>
                    </View>

                    <View style={tw.style('flex-row items-center  w-2/3 my-8')}>
                        <Checkbox isChecked={isCheckout} setIsChecked={setIsCheckout}></Checkbox>
                        <Text style={tw.style(' ml-2 text-base text-slate-500 dark:text-slate-300')}>twqeqwe</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    );
}

export default Login;