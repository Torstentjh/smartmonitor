import React, { MutableRefObject, Ref } from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from '../assets/tailwind';
import { SafeAreaView } from 'react-native-safe-area-context';
interface Props {
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
const Checkbox = (props: Props) => {
    const { isChecked, setIsChecked } = props;
    return (
        <Pressable style={tw.style('w-8 h-8 items-center justify-center')} onPress={() => {
            setIsChecked(!isChecked);
        }}>
            <View style={tw.style('w-5 h-5 items-center bg-teal-100 rounded-xl', isChecked && ' bg-cyan-400')}>
                <Text style={tw.style('text-slate-500 font-bold', isChecked && 'text-slate-200')}>√</Text>
            </View>
        </Pressable >
    );
};

export default Checkbox;