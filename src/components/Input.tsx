import { Button } from '@ant-design/react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Pressable } from 'react-native';
import tw from '../assets/tailwind';
import Toast from "@ant-design/react-native/lib/toast";
import Icon from "@ant-design/react-native/lib/icon";
interface onSubmit {
  (userInfo: Secret): void;
}
interface Secret {
  name: string;
  pwd: string;
}
interface Props {
  onSubmit: onSubmit;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}
function Input({ onSubmit, username, setUsername, password, setPassword }: Props) {
  const [isFocusTop, setFocusTop] = useState(false);
  const [isFocusBtm, setFocusBtm] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <>
      <View style={tw.style('w-2/3 items-center flex-row my-3 shadow-lg')}>
        <TextInput style={tw.style('w-full dark:text-darktext text-lighttext border border-slate-300 rounded-lg text-sm', isFocusTop && 'border-teal-500')}
          onChangeText={(text) => {
            setUsername(text)
          }}
          placeholderTextColor="#808080"
          placeholder="请输入账号"
          maxLength={11}
          onFocus={() => { setFocusTop(true); }}
          onBlur={() => { setFocusTop(false) }}
          value={username}

        ></TextInput>
        {username !== '' && (
          <Pressable style={tw.style('ml-auto mr-3')} onPress={() => {
            setUsername('')
            setPassword('')
          }}>
            <Icon name="close" size={24} color="#ff6868" />
          </Pressable>
        )}
      </View>
      <View style={tw.style('w-2/3 items-center flex-row my-3 shadow-lg')}>
        <TextInput style={tw.style('w-full dark:text-darktext text-lighttext border border-slate-300 rounded-lg text-sm', isFocusBtm && 'border-teal-500')}
          placeholder="密码"
          onChangeText={(text) => {
            setPassword(text)
          }}
          placeholderTextColor="#808080"
          maxLength={18}
          onFocus={() => { setFocusBtm(true) }}
          onBlur={() => { setFocusBtm(false) }}
          secureTextEntry={secureTextEntry}
          value={password}
        // onSubmitEditing={() => {
        //   onSubmit({ name: username, pwd: password });
        // }}
        ></TextInput>
        {password !== '' && (
          <Pressable style={tw.style('ml-auto mr-3')} onPress={() => {
            setSecureTextEntry(!secureTextEntry);
          }}>
            <Icon name={secureTextEntry ? 'eye' : 'eye-invisible'} size={24} color="#CDC9C9" />
          </Pressable>
        )}
      </View>
    </>
  )
}
export default Input;

