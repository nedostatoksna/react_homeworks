import React, { useState } from "react";
import style from "./Messenger.module.css";

const Chat = ( {activeContact, dispatch} ) => {
    const [value, setValue] = useState("");

    const send = () => {
        dispatch({type: 'messageSended', payload: {text: value }})
        console.log(
            `Отправили сообщения с текстом: ${value} этому челу: ${activeContact.name}`
        )
    }

    return (
        <div>
            <textarea 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            /> 
            <br/>
            <button 
                onClick={send}
                className={style.task_btn}
            >
                Send to {activeContact.name}
            </button>
        
        </div>
    )
}

export default Chat;