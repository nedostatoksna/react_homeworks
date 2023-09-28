import React from "react";
import style from "./Gallery.module.css";
import Card from "./Card";
import persons from "./persons";
import SubHeaders from "../../../ui/Headers/SubHeaders";

const Gallery = () => {

    return (
        <>
            <section className={style.jun_section}>
                <SubHeaders>Junior</SubHeaders>
                <Card persons={persons}/>
            </section>
        </>
    )
};

export default Gallery;