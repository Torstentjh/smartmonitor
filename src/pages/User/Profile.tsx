import React, { useState } from 'react';
import { View, Text } from 'react-native';
import tw from '../../assets/tailwind';

import { Image, ImageSourcePropType, StyleSheet, } from "react-native";
import Modal from '@ant-design/react-native/lib/modal'
import SetInfo from '../../components/CommonButton'

// import { useNavFilter } from '../../utils/routeFilter'
// import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import info from '../../store/userInfo'
// import useMqttStore from "../../store/mqtt";
// import result from "../../utils/imageLib";



function Profile() {
    // const { disconnect } = useMqttStore()
    const [selectedImage, setSelectedImage] = useState<string>();

    const { avatarUrl, addAvatar, isLogin } = info()
    const pick = () => {
        // launchImageLibrary({
        //     mediaType: 'photo',
        //     maxWidth: 1000,// 设置选择照片的大小，设置小的话会相应的进行压缩
        //     maxHeight: 1000,
        //     quality: 0.9,
        //     // videoQuality: 'low',
        //     // includeBase64: true
        // }, (res: any) => {
        //     if (res.didCancel) {
        //         return false;
        //     } else {
        //         console.log(res.assets![0].uri);
        //         const url = res.assets![0].uri ?? ''
        //         setSelectedImage(url)
        //         addAvatar(url)
        //     }
        //     // 对获取的图片进行处理
        // },)
    }
    const handleAvatarPress = () => {
        // 头像被点击后的逻辑
        Modal.alert('头像', '确定要修改头像?', [
            { text: 'Cancel', onPress: () => { }, style: 'cancel' },
            { text: 'OK', onPress: pick },
        ])
    };
    const handleUsernamePress = () => {
        // 用户名被点击后的逻辑
        Modal.prompt(
            '姓名',
            '修改姓名',
            (password: any) => { },
            'default',
            '',
            ['请输入姓名'],
        )
    };
    const handleAccountPress = () => {
        // 账号被点击后的逻辑
        Modal.prompt(
            '账号',
            '修改账号',
            (password: any) => { },
            'default',
            '',
            ['please input'],
        )
    };
    const handlePwdPress = () => {
        // 密码被点击后的逻辑
        Modal.prompt(
            'Input password',
            'password message',
            (password: any) => { },
            'secure-text',
            '',
        )
    };
    // props:any
    // const { navigation } = props
    // const nav = () => {
    //     navigation.goBack()
    //     setIsLogin()
    //     setInfo(null)
    //     VerseChose()
    //     disconnect()
    // }
    return (
        <View style={tw.style('w-full h-full bg-light-bg dark:bg-dark-bg items-center')}>
            <View style={tw.style('bg-content-l dark:bg-content-d w-11/12 mt-5 rounded-xl')}>
                <Text style={tw.style('mt-2 mb-2 ml-3 text-lg dark:text-slate-100')}>
                    基础资料
                </Text>
                <SetInfo name="头像" func={handleAvatarPress} rightContent={<Image source={isLogin ? require('../../assets/global/login.png') : require('../../assets/global/avatar.png')} style={tw.style('w-15 h-15 rounded-full overflow-hidden -mr-2')}></Image>}></SetInfo>
                <SetInfo name="账号" func={handleAccountPress} rightContent={<Text style={tw.style('text-lg dark:text-slate-100')}>test</Text>}></SetInfo>
                <SetInfo name="昵称" rightContent={<Text style={tw.style('text-lg dark:text-slate-100')}>Torsten</Text>} func={handleUsernamePress} ></SetInfo>
                <SetInfo name="密码" func={handlePwdPress} ></SetInfo>
            </View>
        </View >
    );

}

export default Profile
