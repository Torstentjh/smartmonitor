import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Modal } from 'react-native';
import tw from 'twrnc';

const DropMenu = () => {
    return (
        <TouchableWithoutFeedback >
            <Modal transparent={true}>
                <View style={tw`justify-center items-center bg-black opacity-50 h-full w-full`}>

                </View>
            </Modal>
            {/* bg-black opacity-50 h-full w-full */}




        </TouchableWithoutFeedback>

    );
};
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'black',
        display: 'flex',
    },
});
export default DropMenu;