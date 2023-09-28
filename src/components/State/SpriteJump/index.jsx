import React from "react";
import { useState } from "react";
import style from "./SpriteJump.module.css";
import SubHeaders from "../../../ui/Headers/SubHeaders";

const SpriteJump = () => {

    const [frame, setFrame] = useState(0);

    const move = function(e) {
        setTimeout(setFrame, 3000)
    }

    return (
        <>
            <section className={style.section}>
                <SubHeaders>Sprite Jump</SubHeaders>
                <div className={style.sprite_wrapper}>
                    <div 
                        className={style.frame_wrapper}
                        onClick={(e) => move(e)}
                    >

                    </div>
                </div>
            </section>
        </>
    )
}

export default SpriteJump;