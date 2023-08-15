import React from "react";
import style from "./Gallery.module.css";
import Card from "../Card";
import persons from "./persons";

const Gallery = () => {

    return (
        <>
            <h1 className={style.sub_title}>
            Junior
            </h1>
            <Card persons={persons}/>
        </>
    )
};

export default Gallery;