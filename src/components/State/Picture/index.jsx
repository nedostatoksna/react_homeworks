import React from "react";
import style from "./Picture.module.css";
import { useState } from "react";
import SubHeaders from "../../../ui/Headers/SubHeaders";

const Picture = () => {

    const [border, setBorder] = useState({
                                    background: true,
                                    border: false
                                });

   const changeState = (e) => {
    (e.target.tagName === "IMG")
    ?
        setBorder({
            background: false,
            border: true
        })
    :
        setBorder({
            background: true,
            border: false
        })
   }

    return (
        <>
            <section className={style.section}>
                <SubHeaders>Add & remove CSS class by click</SubHeaders>
                <div 
                    className={border.background === true ? style.pic_background_bold : style.pic_background}
                    onClick={(e) => changeState(e)}
                >
                    <img
                        onClick={(e) => changeState(e)}
                        src="https://i.imgur.com/5qwVYb1.jpeg" 
                        width="300px" 
                        className={border.border === true ? style.border_thin : "" } 
                    />
                </div>
            </section>
        </>
    )
};

export default Picture;