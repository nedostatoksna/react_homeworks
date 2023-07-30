import React from "react";
import style from "./Gallery.module.css";
import Card from "../Card";

const Gallery = () => {

    const persons = [
        {
            name: "Maria Skłodowska-Curie",
            avatar: "https://i.imgur.com/szV5sdGs.jpg",
            profession: "physicist and chemist",
            awardsCount: "4",
            awardsDetails: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
            discovered: "polonium (chemical element)"
        },
        {
            name: "Katsuko Saruhashi",
            avatar: "https://i.imgur.com/YfeOqp2s.jpg",
            profession: "geochemist",
            awardsCount: "2",
            awardsDetails: "(Miyake Prize for geochemistry, Tanaka Prize)",
            discovered: "a method for measuring carbon dioxide in seawater"
        }
    ]

    return (
        <>
        <section className={style.jun_section}>
            <h1 className={style.sub_title}>
               Junior
            </h1>
            <Card person={persons[0]}/>
            <Card person={persons[1]}/>

        </section>
   
        
        </>
    )
};

export default Gallery;