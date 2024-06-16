import { createContext, useEffect, useState } from 'react';
import tw, { useDeviceContext, useAppColorScheme } from '../assets/tailwind';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useWebSocket from './Websocket'


export const AppContext = createContext<any>(null);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const socket = useWebSocket();
    useEffect(() => {
        if (socket) {
            socket.onopen = () => {
                console.log('WebSocket Connected');
            };
            socket.onclose = () => {
                console.log('WebSocket Disconnected');
            };
            socket.onerror = (e) => {
                console.log('WebSocket Error', e);
            };
        }
    })
    const [colorScheme, toggleColorScheme, setColorScheme] =
        useAppColorScheme(tw);
    const [theme, setTheme] = useState('light');
    const buster = useDeviceContext(tw, {
        initialColorScheme: theme === 'light' ? 'light' : 'dark',
        observeDeviceColorSchemeChanges: false
    });
    useEffect(() => {
        const getTheme = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('InitTheme');
                if (jsonValue == null) {
                    const themeValue = JSON.stringify('light');
                    await AsyncStorage.setItem('InitTheme', themeValue);
                    // setfirstLoad(JSON.parse(jsonValue))
                    setTheme(JSON.parse(themeValue))
                    setColorScheme('light')
                } else {
                    const stheme = JSON.parse(jsonValue) === 'light' ? 'light' : 'dark';
                    setColorScheme(stheme)
                    setTheme(stheme)
                }
            } catch (e) {
            }
        };
        getTheme();
    }, [])

    const contexts = [colorScheme, toggleColorScheme, setColorScheme, buster, tw, socket];
    return <AppContext.Provider value={contexts}>{children}</AppContext.Provider>;
};

export default AppContextProvider;