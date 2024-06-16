import { useRef } from 'react';
let socketInstance: WebSocket | null = null;
const useWebSocket = () => {
    const socketRef = useRef<WebSocket | null>(null);

    if (!socketInstance) {
        socketInstance = new WebSocket('ws://43.138.109.120:5200');
    }
    socketRef.current = socketInstance;
    return socketRef.current;

};

export default useWebSocket;