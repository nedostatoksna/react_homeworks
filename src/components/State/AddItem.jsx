import React, { useState } from "react";
import style from "./State.module.css";

const AddItem = ({ onAddItem }) => {
    
    const [title, setTitle] = useState("");

    return (
        <>
        <div className={style.btns_wrapper}>
            <input
                value={title}
                className={style.input_color}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                className={`${style.btn} ${style.btn_add}`}
                onClick={() => onAddItem(title)}
            >
                Add task
            </button>
        </div>
        
        </>
    )
}

export default AddItem;