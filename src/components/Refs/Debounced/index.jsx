import React from "react";
import style from "./Debounced.module.css";
import SubHeaders from "../../../ui/Headers/SubHeaders";
import { menu } from "./menu";
import Dish from "./Dish";

const Debounced = () => {
 
    return (
        <>
            <section className={style.section}>
                <SubHeaders>Debounced</SubHeaders>
                {
                    menu.map(item =>(
                        <Dish 
                            item={item} 
                            key={item.id}
                        />
                    ))
                }
            </section>
        </>
    )
}

export default Debounced;