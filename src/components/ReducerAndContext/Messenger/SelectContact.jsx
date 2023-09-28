import React, { useState } from "react";
import style from "./Messenger.module.css";

const SelectContact = ({ contact, dispatch }) => {

    const select = (id) => {
        dispatch({type: 'contactSelected', payload: {id: id}});
        console.log(id);
    }

    return (

        <li className={style.item_box}>
            {contact.name}
            {contact.email}
            <button 
                onClick={() => select(contact.id)}
                className={style.task_btn}
            >
                select
            </button>

        </li>
    )
}

export default SelectContact;