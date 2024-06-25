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

let socketInstance: WebSocket | null = null;

const useWebSocket = (isLoggedIn: boolean) => {
    const socketRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        // 当用户登录时创建WebSocket连接
        if (isLoggedIn && !socketInstance) {
            socketInstance = new WebSocket('ws://43.138.109.120:5200');
            socketRef.current = socketInstance;
        }

        // 当组件卸载或用户注销时关闭WebSocket连接
        return () => {
            if (socketInstance) {
                socketInstance.close();
                socketInstance = null;
                socketRef.current = null;
            }
        };
    }, [isLoggedIn]);

    return socketRef.current;
};

export default useWebSocket;
