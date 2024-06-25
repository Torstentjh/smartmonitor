// import React, { ReactNode, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';
// import Modal from '@ant-design/react-native/lib/modal';
// import Toast from '@ant-design/react-native/lib/toast';
// import tw from '../assets/tailwind';
// type prop = {
//     children?: ReactNode
//     round?: boolean
//     type: 'tip' | 'modal'
//     duration?: number
//     title?: string
//     visible?: boolean
//     setVisible?: (visible: boolean) => void
//     subText?: string
//     tipType?: 'success' | 'loading'
//     func?: () => void
// }

// export const Card = (prop: prop) => {

//     const { round = true, visible = false } = prop
//     if (!visible) {
//         return null
//     }
//     return (
//         <View style={tw.style('justify-center items-center bg-white overflow-hidden', round && 'rounded-3xl')}>
//             {prop.type == 'tip' ? <CardTip {...prop}></CardTip> : <CardModal {...prop}></CardModal>}
//         </View>
//     );
// };

// const CardModal = (prop: prop) => {
//     // const showModal = () => {
//     //     // Modal.alert(prop.title || 'Title', 'Message', [
//     //     //     {
//     //     //         text: 'Cancel', onPress: () => {
//     //     //             prop.setVisible!(false)
//     //     //         },
//     //     //     },
//     //     //     { text: 'OK', onPress: () => { prop.setVisible!(false) } },
//     //     // ]);
//     // }
//     // useEffect(() => {
//     //     showModal()
//     // }, [])
//     return (
//         <>
//             <Modal style={tw.style('dark:bg-content-d bg-content-l', prop.round && 'rounded-3xl overflow-hidden')} title={<Text style={tw.style('text-lighttext dark:text-darktext')}>{prop.title}</Text>} visible={prop.visible} onClose={() => {
//                 prop.setVisible!(false)
//             }} transparent popup maskClosable animationType={'slide'} closable>
//                 {prop.children}
//                 <Button onPress={() => {
//                     prop.setVisible!(false)
//                     prop.func!()
//                 }} title={prop.subText!}>

//                 </Button>
//             </Modal>
//         </>
//     )
// }
// const CardTip = (prop: prop) => {
//     const { tipType } = prop
//     const showTip = () => {
//         switch (tipType) {
//             case 'success':
//                 Toast.success(prop.title!, prop.duration, () => {
//                     prop.setVisible!(false)
//                 })
//                 break;
//             case 'loading':
//                 Toast.loading(prop.title!, prop.duration, () => {
//                     Toast.info('Load success !!!')
//                     prop.setVisible!(false)
//                 })
//                 break;
//             default:
//                 break;
//         }
//         setTimeout(() => {
//             Toast.removeAll()
//         }, prop.duration! * 800);
//     }
//     useEffect(() => {
//         showTip()
//     }, [])
//     return (
//         <View >

//         </View>
//     )
// }

// export default Card;



import React, { ReactNode, useEffect, useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import Modal from '@ant-design/react-native/lib/modal';
import Toast from '@ant-design/react-native/lib/toast';
import tw from '../assets/tailwind';

type CommonProps = {
    children?: ReactNode;
    round?: boolean;
    title?: string;
    visible: boolean;
    setVisible?: (visible: boolean) => void;
    subText?: string;
    func?: () => void;
    duration?: number;
};

type TipProps = CommonProps & {
    type: 'tip';
    tipType: 'success' | 'loading' | 'fail';
};

type ModalProps = CommonProps & {
    type: 'modal';
};

type Props = TipProps | ModalProps;

const Card: React.FC<Props> = (props) => {
    const { round = true, type, visible } = props;
    if (!visible) {
        return null;
    }
    return (
        <View style={tw.style('justify-center items-center bg-white overflow-hidden', round && 'rounded-3xl')}>
            {type === 'tip' ? <CardTip {...props} /> : <CardModal {...props} />}
        </View>
    );
};

const CardModal: React.FC<ModalProps> = ({
    round = true,
    visible,
    title,
    setVisible = () => { },
    children,
    subText,
    func = () => { }
}) => {
    const handleClose = useCallback(() => {
        setVisible(false);
        func();
    }, [setVisible]);

    return (
        <Modal
            style={tw.style('dark:bg-content-d bg-content-l', round && 'rounded-3xl overflow-hidden')}
            title={<Text style={tw.style('text-lighttext dark:text-darktext')}>{title}</Text>}
            visible={visible}
            onClose={() => setVisible(false)}
            transparent
            popup
            closable
            animationType='slide'
        >
            {children}
            <Button onPress={handleClose} title={subText || 'OK'} />
        </Modal>
    );
};

const CardTip: React.FC<TipProps> = ({
    tipType,
    title,
    duration = 1,
    visible,
    setVisible = () => { }
}) => {
    useEffect(() => {
        if (visible) {
            const showTip = () => {
                switch (tipType) {
                    case 'success':
                        Toast.success(title!, duration, () => { setVisible(false); });
                        break;
                    case 'loading':
                        Toast.loading(title!, duration, () => {
                            Toast.info('Load success !!!');
                            setVisible(false);
                        });
                        break;
                    case 'fail':
                        Toast.fail(title!, duration, () => { setVisible(false); });
                        break;
                    default:
                        break;
                }
                setTimeout(() => {
                    Toast.removeAll();
                }, duration * 800);
            };
            showTip();
        }
    }, [visible, tipType, title, duration, setVisible]);

    return <View />;
};

export default Card;


