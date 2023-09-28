import React, { useCallback, useEffect, useInsertionEffect, useRef } from "react";
import {
    createEncryptedConnection,
    createUnencryptedConnection,
} from './chat';
import style from "./ChatEffect.module.css";

export function useEffectEvent(fn) {
    const ref = useRef(null);
    useInsertionEffect(() => {
      ref.current = fn;
    }, [fn]);
    return useCallback((...args) => {
      const f = ref.current;
      return f(...args);
    }, []);
  }

const ChatRoom = ({roomId, isEncrypted, onMessage}) => {

    const onReceiveMessage = useEffectEvent(onMessage);

    useEffect(() => {
        function createConnection() {
            const options = {
                serverUrl: 'https://localhost:1234',
                roomId: roomId,
            };
            if (isEncrypted) return createEncryptedConnection(options);
            else return createUnencryptedConnection(options);
        }
        const connection = createConnection();
        connection.on("onMessage", (message) => onReceiveMessage(message));
        connection.connect();
        return () => {
            connection.disconnect();
        }
    }, [roomId, onReceiveMessage, isEncrypted])





    return <h1 className={style.welcome}>Welcome to the {roomId} room!</h1>;

};

export default ChatRoom;