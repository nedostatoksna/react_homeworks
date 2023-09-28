import React, { useContext, useReducer, useState } from "react";
import style from "./Messenger.module.css";
import ContactList from "./ContactList";
import Chat from "./Chat";
import MessengerReduser from "./MessengerReduser";
import SubHeaders from "../../../ui/Headers/SubHeaders";
import { ThemeContext } from "../ThemeSwitch/ThemeContext";

const initContacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com', active: true, message: "" },
    {id: 1, name: 'Alice', email: 'alice@mail.com', active: false, message: "" },
    {id: 2, name: 'Bob', email: 'bob@mail.com', active: false, message: "" },
];

let activeContact = initContacts.find(contact => contact.active === true);

const Messenger = () => {

    const {theme} = useContext(ThemeContext);

    const [contacts, dispatch] = useReducer(
        MessengerReduser,
        initContacts
    );
 
    return (
        <div className={theme === 'lilac' ? style.lilac_wrapper : style.light_wrapper}>
             <section className={style.section}>
                <SubHeaders>Messenger</SubHeaders>
                <div className={style.messenger_box}>
                    <ContactList contacts={contacts} dispatch={dispatch} />
                    <Chat activeContact={activeContact} dispatch={dispatch}/>
                </div>
            </section>

        </div>

    )
}

export default Messenger;