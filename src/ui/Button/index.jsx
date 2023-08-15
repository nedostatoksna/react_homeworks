import React from "react";
import style from "./Buttons.module.css";

const Buttons = ({ onClickHandler, children }) => {

    return (
        <div className={style.btn_wrapper}>
            <button className={style.btn} onClick={onClickHandler}>
                {children}
            </button>
        </div>
    )
}

export default Buttons;