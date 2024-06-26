import { createContext, useEffect, useState } from 'react';
import tw, { useDeviceContext, useAppColorScheme } from '../assets/tailwind';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useWebSocket from './Websocket'
import Userinfo from '../store/userInfo';

export const AppContext = createContext<any>(null);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { setIsLogin, isLogin } = Userinfo();
    const socket = useWebSocket(isLogin);

    useEffect(() => {
        const getTheme = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('InitTheme');
                if (jsonValue == null) {
                    const themeValue = JSON.stringify('light');
                    await AsyncStorage.setItem('InitTheme', themeValue);
                    setTheme(JSON.parse(themeValue));
                    setColorScheme('light');
                } else {
                    const stheme = JSON.parse(jsonValue) === 'light' ? 'light' : 'dark';
                    setColorScheme(stheme);
                    setTheme(stheme);
                }
            } catch (e) {
                console.error(e);
            }
        };

        getTheme();

        const getData = async (key: string) => {
            try {
                const jsonValue = await AsyncStorage.getItem(key);
                return jsonValue != null ? JSON.parse(jsonValue) : null;
            } catch (e) {
                console.error(e);
            }
        };

        const checkLoginStatus = async () => {
            const userInfo = await getData('userInfo');
            if (userInfo?.isLogin) {
                setIsLogin(true);
            }
        };

        checkLoginStatus();
    }, []);

    // useEffect(() => {

    //     console.log('WebSocket instance:', socket);
    //     if (socket) {
    //         socket.onopen = () => {
    //             console.log('WebSocket Connected');
    //         };

    //         socket.onclose = () => {
    //             console.log('WebSocket Disconnected');
    //         };

    //         socket.onerror = (e) => {
    //             console.log('WebSocket Error', e);
    //         };
    //     }
    // }, [socket]);

    const [colorScheme, toggleColorScheme, setColorScheme] =
        useAppColorScheme(tw);
    const [theme, setTheme] = useState('light');
    const buster = useDeviceContext(tw, {
        initialColorScheme: theme === 'light' ? 'light' : 'dark',
        observeDeviceColorSchemeChanges: false
    });

    const contexts = { colorScheme, toggleColorScheme, setColorScheme, buster, tw, socket };

    return <AppContext.Provider value={contexts}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
