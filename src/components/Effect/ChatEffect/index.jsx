import React, { useState } from "react";
import style from "./ChatEffect.module.css";
import SubHeaders from "../../../ui/Headers/SubHeaders";
import ChatRoom from './ChatRoom.jsx';
import { showNotification } from './notifications';

export default function ChatApp() {
    const [isDark, setIsDark] = useState(false);
    const [roomId, setRoomId] = useState('general');
    const [isEncrypted, setIsEncrypted] = useState(false);

    return (
        <section className={style.section}>
             <div style={{maxWidth: "300px", margin: "auto"}}>
            <SubHeaders>Chat + Effect</SubHeaders>
            <label className={style.label}>
                <input
                    type="checkbox"
                    className={style.checkbox}
                    checked={isDark}
                    onChange={(e) =>
                        setIsDark(e.target.checked)
                    }
                />
                Use dark theme
            </label>
            <br/>
            <label className={style.label}>
                <input
                    type="checkbox"
                    checked={isEncrypted}
                    className={style.checkbox}
                    onChange={(e) =>
                        setIsEncrypted(e.target.checked)
                    }
                />
                Enable encryption
            </label>
            <br/>
            <label className={style.label}>
                Choose the chat room:{' '}
                <select
                    value={roomId}
                    className={style.input_color}
                    onChange={(e) =>
                        setRoomId(e.target.value)
                    }
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <hr />
            <ChatRoom
                roomId={roomId}
                isEncrypted={isEncrypted}
                onMessage={(msg) => {
                    showNotification(
                        'New message: ' + msg, 
                        isDark ? 'dark' : 'light'
                    );
                }}
            />
        </div>

        </section>
       
    );
}