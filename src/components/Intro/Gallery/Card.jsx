import React from "react";
import style from "./Gallery.module.css";

const Card = ({ persons }) => {

    return (
        <>
            {
                persons.map(person => (
                    <section className={style.card} key={person.name}>
                        <h1 className={style.name_title}>
                            {person.name}
                        </h1>
                        <img 
                            className={style.photo}
                            alt={person.name}
                            src={person.avatar}
                        />
                        <ul>
                            <li className={style.person_descr}>
                                <b>Profession:</b> {person.profession}
                            </li>
                            <li className={style.person_descr}>
                                <b>Awards:</b> <b>{person.awardsCount}</b> {person.awardsDetails}
                            </li>
                            <li className={style.person_descr}>
                                <b>Discovered:</b> {person.discovered}
                            </li>
                        </ul>
                    </section>
                ))
            }
        </>
    )
};

export default Card;