import React from "react";
import style from "./Gallery.module.css";
import Card from "../Card";
import persons from "./persons";

const Gallery = () => {

    return (
        <>
            <section className={style.jun_section}>
                <h1 className={style.sub_title}>
                Junior
                </h1>
                <Card persons={persons}/>
            </section>
        </>
    )
};

export default Gallery;