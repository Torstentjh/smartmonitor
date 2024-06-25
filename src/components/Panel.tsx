import Icon from '@ant-design/react-native/lib/icon';
import SwipeAction from '@ant-design/react-native/lib/swipe-action';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, Image, Alert, Pressable, TextInput } from 'react-native';
import tw from '../assets/tailwind';
import Userinfo from '../store/userInfo';
import { queryMenber, DeleMenber, AddMenber } from '../hooks/useHttpRequest';
import Card from './Card';


const Load = ({ isPending, setIsLoading, isLoading }: any) => {
    useEffect(() => {
        let loadtime: any;
        if (isPending) {
            setIsLoading(true)
            loadtime = setTimeout(() => {
                setIsLoading(false)
            }, 2000);
        } else {
            loadtime = setTimeout(() => {
                setIsLoading(false)
            }, 2000);
        }
        return () => {
            clearTimeout(loadtime)
        }
    }, [isPending])
    return (
        isLoading ? (<>
            <View style={tw.style('w-full h-80')} >
                <Text style={tw.style(' font-bold text-3xl text-center align-middle text-lighttext dark:text-darktext')}>Loading...</Text>
            </View >
        </>) : (null)

    )
}

const Panel = () => {
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const DeleId = useRef('')
    const [addId, setAddId] = useState('')
    const { isPending, data, isSuccess, refetch, } = queryMenber();
    const { refetch: dele, } = DeleMenber(DeleId.current, 'deletemenber');
    const { refetch: add } = AddMenber(addId, 'addhomemenber');

    const Item = ({ id }: any) => {
        const right = [
            {
                text: (<Icon style={tw.style('text-lighttext dark:text-darktext')} name='delete'></Icon>),
                onPress: () => {
                    DeleId.current = id
                    dele()
                    refetch()
                    setIsLoading(true)
                },
                backgroundColor: 'gray',
                color: 'white',
            },
        ]
        return (
            <SwipeAction
                onSwipeableClose={() => { }}
                childrenContainerStyle={tw.style('rounded-lg')} right={right} containerStyle={tw.style('w-full h-20')} >
                <View style={tw.style('w-full h-20 flex flex-row  border-b')}>
                    <Image source={require('../assets/global/avatar.png')} style={tw.style('rounded-3xl w-12 h-12 my-auto ml-6')}></Image>
                    <Text style={tw.style('text-lg align-middle text-lighttext dark:text-darktext ml-5')}>用户{id}</Text>
                </View>
            </SwipeAction>
        )
    };
    return (
        <View style={tw.style(' rounded-3xl overflow-hidden bg-content-l dark:bg-content-d w-9/10')}>
            <Card type='modal' visible={visible} setVisible={setVisible} duration={1} title='添加用户' subText='添加' func={() => {
                setAddId('')
                setIsLoading(true)
                add()
                refetch()
            }}>
                <View>
                    <TextInput value={addId} maxLength={3} onChangeText={(text) => {
                        setAddId(text)
                    }} placeholder='输入用户id' style={tw.style(' border border-gray-400 my-5')} onSubmitEditing={() => {
                        setAddId('')
                        setIsLoading(true)
                        add()
                        refetch()
                    }}></TextInput>
                </View>
            </Card>
            <View style={tw.style('flex flex-row justify-between h-16 items-center')}>
                <Text style={tw.style('text-lg text-lighttext dark:text-darktext ml-6 align-middle font-bold')}>共享成员</Text>
                <Pressable style={tw.style('dark:bg-gray-500 bg-gray-400 mr-6 w-10 h-10 items-center justify-center')} onPress={() => {
                    setVisible(true)
                }}>
                    <Icon name='plus' size={36} style={tw.style('text-lighttext dark:text-darktext')}></Icon>
                </Pressable>
            </View>
            {isLoading ? (
                <Load isPending={isPending} setIsLoading={setIsLoading} isLoading={isLoading}></Load>
            ) : (
                <FlatList
                    refreshing={isPending}
                    onRefresh={() => {
                        refetch()
                        setIsLoading(true)
                    }}
                    style={tw.style('w-full h-80')}
                    data={data}
                    renderItem={({ item }) => <Item id={item.UserID} />}
                    keyExtractor={item => item.UserID}
                />
            )}
        </View>
    );
};

export default Panel;