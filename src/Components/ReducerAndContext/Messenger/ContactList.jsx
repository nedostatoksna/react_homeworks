import React, { useState } from "react";
import style from "./Messenger.module.css";

const ContactList = ({ contacts, dispatch }) => {

    const select = (id) => {
        dispatch({type: 'contactSelected', payload: {chosenId: id}});
        console.log(id);
    }

    return (
        <ul className={style.contact_list}>
            {
                contacts.map(contact => (
                   <li className={style.item_box} key={contact.email}>
                   {contact.name}
                   {contact.email}
                   <button 
                       onClick={() => select(contact.id)}
                       className={style.task_btn}
                   >
                       select
                   </button>
       
                    </li>
                ))
            }
        </ul>
    )
}

export default ContactList;