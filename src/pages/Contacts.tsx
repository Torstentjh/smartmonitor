import React, { useCallback } from 'react';
import { View, Text, Image, Linking, Alert } from 'react-native';
import tw from '../assets/tailwind';
import { SafeAreaView } from 'react-native-safe-area-context';

import CommontButton from '../components/CommonButton';
import Icon from '@ant-design/react-native/lib/icon';

const Contacts = () => {
    const github = 'https://github.com/Torstentjh/refactorRNproject'
    const mail = 'mailto:1143592334@qq.com'
    const phone = 'tel:+861233211234567'
    const handlePress = useCallback(async (url: any) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, []);
    return (
        <SafeAreaView>
            <View style={tw.style('dark:bg-dark-bg bg-light-bg ')}>
                <Text style={tw.style('ml-8 text-3xl font-bold dark:text-slate-300 text-slate-600 my-3 ')}>Contacts</Text>
            </View>
            <View style={tw.style('dark:bg-dark-bg bg-light-bg w-full h-full  items-center')}>

                <View style={tw.style('w-11/12 dark:bg-dark-bg bg-light-bg items-center mt-20')}>
                    <Image source={{
                        uri: 'https://avatars.githubusercontent.com/u/75771172?v=4'
                    }} style={[tw.style('items-center rounded-full w-30 h-30')]}></Image>
                    <Text style={tw.style('mt-5 font-bold text-lg text-lighttext dark:text-darktext')}>Designed by Torsten.</Text>
                    <View style={tw.style('dark:border-slate-500 border-slate-300 border-b w-2/5 mt-2')}></View>
                    <View style={tw.style('mt-8 bg-content-l dark:bg-content-d w-4/5 rounded-2xl')}>
                        <Text style={tw.style('ml-5 mt-3 font-bold text-2xl text-lighttext dark:text-darktext')}>About</Text>
                        <Text style={tw.style('text-lighttext dark:text-darktext text-lg ml-5')}>Attention Is All You Need </Text>
                        <Text style={tw.style('text-lighttext dark:text-darktext text-lg ml-5')}>The colors that we mix will set the mind free
                        </Text>
                        <Text style={tw.style('text-lighttext dark:text-darktext text-lg ml-5')}> Let the blind see beyond harmony
                        </Text>
                        <Text style={tw.style('text-lighttext dark:text-darktext text-lg ml-5 mt-2')}>如果你有什么问题或者建议，欢迎联系我！
                        </Text>
                        <CommontButton icon={<Icon name="github" size={24} color="#6f6f6f" />} name='Github' func={() => { handlePress(github) }} style={{ marginLeft: '3%', marginRight: '3%' }}></CommontButton>
                        <CommontButton icon={<Icon name="mail" size={24} color="#6f6f6f" />} name='邮箱' style={{ marginLeft: '3%', marginRight: '3%' }} func={() => { handlePress(mail) }}></CommontButton>
                        <CommontButton icon={<Icon name="phone" size={24} color="#6f6f6f" />} name='1233211234567' style={{ marginLeft: '3%', marginRight: '3%' }} func={() => { handlePress(phone) }}></CommontButton>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Contacts;