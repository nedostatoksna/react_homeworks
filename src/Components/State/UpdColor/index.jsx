import React from "react";
import style from "./UpdColor.module.css";
import { useState } from "react";
import SubHeaders from "../../../ui/Headers/SubHeaders";

const UpdColor = () => {

    const [color, setColor] = useState("#5f5ffb")

    const changeColor = (value) => {
        setColor(value);
    }

    return (
        <>
            <section className={style.section}>
                <SubHeaders>Upd component for props</SubHeaders>
                <label className={style.label_for_input}>Change color: <input 
                                        value={color.color}
                                        onChange={(e) => changeColor(e.target.value)}
                                        className={style.input_color}
                                     />
                </label>
                <p style={{ color: color }} className={style.p_color}>12.00</p>
            </section>
        
        </>
    )
}

export default UpdColor;