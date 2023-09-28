import React from "react";
import style from './LoadingBio.module.css';

const Select = ({ persons, setChosenPerson, chosenPerson}) => {

    return (
        <>
            <select 
                value={chosenPerson} 
                onChange={(e) => setChosenPerson(e.target.value)}
                className={style.input_color}
            >
                {
                    persons.map(person => (
                        <option 
                            value={person} 
                            key={person}
                            className={style.option}
                        >
                            {person}
                        </option>
                    ))
                }
            </select>
        
        </>
    )
};

export default Select;