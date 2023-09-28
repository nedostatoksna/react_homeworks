import React, { useContext, useState } from "react";
import style from "./TaskList.module.css";
import { ThemeContext } from "../ThemeSwitch/ThemeContext";

const AddTask = ({ dispatch}) => {

    const [value, setValue] = useState("");
    const { theme } = useContext(ThemeContext);
    
	const inputStyle = theme === 'lilac' ? style.input_for_lilac : style.input_color;
	const btnStyle = theme === 'lilac' ? style.btn_for_lilac : style.task_btn;

    const add = () => {
        if (value) {
            dispatch({type: 'added', payload: {text: value}});
            setValue("");
        } else {
            console.log("enter task name");
        }
    }

    return (
        <div className={style.btns_wrapper}>
            <input value={value} onChange={(e) => setValue(e.target.value)} className={inputStyle}/>
            <button onClick={add} className={btnStyle}>
                add
            </button>
        </div>
    )
}
export default AddTask;