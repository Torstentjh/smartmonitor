import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import tw, { style } from 'twrnc';
import Animated, { useAnimatedStyle, SharedValue, } from 'react-native-reanimated';
import theme from '../../store/setting'
type Props = {
    active: SharedValue<boolean>
}
const Overlay = ({ active }: Props) => {
    const { toggleMenu } = theme()
    const animatedStyles = useAnimatedStyle(() => {
        return {
            display: active.value ? 'flex' : 'none',
        };
    });
    return (
        <Animated.View style={[animatedStyles, overlay.overlay]}>
            <Pressable style={[overlay.overlay]} onPress={() => {
                active.value = false;
                toggleMenu();
            }} />
        </Animated.View>
    );
};
const overlay = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
    }
})
export default Overlay;