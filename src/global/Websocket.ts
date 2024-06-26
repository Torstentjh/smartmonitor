// import { useRef } from 'react';
// let socketInstance: WebSocket | null = null;
// const useWebSocket = () => {
//     const socketRef = useRef<WebSocket | null>(null);

//     if (!socketInstance) {
//         socketInstance = new WebSocket('ws://43.138.109.120:5200');
//     }
//     socketRef.current = socketInstance;
//     return socketRef.current;

// };

// export default useWebSocket;
import { useEffect, useRef } from 'react';

const useWebSocket = (isLoggedIn: boolean) => {
    let socketRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        if (isLoggedIn && !socketRef.current) {
            socketRef.current = new WebSocket('ws://43.138.109.120:5200');

            socketRef.current.onopen = () => {
                console.log('WebSocket Connected');
            };

            socketRef.current.onclose = () => {
                console.log('WebSocket Disconnected');
            };

            socketRef.current.onerror = (e) => {
                console.log('WebSocket Error', e);
            };
        }
        return () => {
            if (socketRef.current) {
                socketRef.current.close();
                socketRef.current = null;
            }
        };
    }, [isLoggedIn]);

    return socketRef.current;
};

export default useWebSocket;
