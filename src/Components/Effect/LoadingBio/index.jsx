import React, { useEffect, useState } from "react";
import SubHeaders from "../../../ui/Headers/SubHeaders";
import style from './LoadingBio.module.css';
import Select from "./Select";
import { db, fetchBio} from './api';

const LoadingBio = () => {

    const [chosenPerson, setChosenPerson] = useState("Taylor");
    const [bio, setBio] = useState(null);

    const getKeys = (obj) => {
        const keys = Object.keys(obj);
        return keys;
    };

    const persons = getKeys(db);

    useEffect(() => {
        let ignore = false;
        setBio(null);

        fetchBio(chosenPerson).then(result => {
            if (!ignore) {
              setBio(result);
            }
          });
        return () => {
            ignore = true;
        }
    },[chosenPerson])

    return (
        <> 
            <section className={style.section}>
                <SubHeaders>Loading Bio</SubHeaders>
                <div className={style.bio_box}>
                    <Select persons={persons} chosenPerson={chosenPerson} setChosenPerson={setChosenPerson}/>
                    <hr/>
                    <p className={style.bio}>
                    {bio ? bio : "loading..."}
                    </p>
                </div>
            </section>
        
        </>
    )
};

export default LoadingBio;