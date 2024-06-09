
import BottomSheet, { BottomSheetView, useBottomSheetTimingConfigs } from '@gorhom/bottom-sheet';
import React, { Ref, useCallback, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { Easing } from 'react-native-reanimated';
import tw from 'twrnc';
import Change from '.';

type props = {
    bottomSheetRef: Ref<BottomSheet>
    handleSheetChanges: (index: number) => void
}
const BottomSheetT = ({ bottomSheetRef, handleSheetChanges }: props) => {
    const snappoints = ['50%']
    const animationConfigs = useBottomSheetTimingConfigs({
        duration: 1000,
        easing: Easing.in(Easing.bounce),
    });

    return (
        <BottomSheet
            index={-1}
            ref={bottomSheetRef}
            snapPoints={snappoints}
            onChange={handleSheetChanges}
            animationConfigs={animationConfigs}
            enablePanDownToClose={true}
            style={tw.style('border rounded-xl dark:border-slate-400')}
        >
            <BottomSheetView style={tw.style('')}>
                <Change />
            </BottomSheetView>
        </BottomSheet>
    );
};

export default BottomSheetT;