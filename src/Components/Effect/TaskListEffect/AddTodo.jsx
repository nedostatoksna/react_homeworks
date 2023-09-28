import React, { useState } from "react";
import style from "./TaskListEffect.module.css";
import { addTodo } from "./api";

const AddTodo = ({ dispatch}) => {

    const [value, setValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const add = async () => {
        setIsLoading(true);
        if (value) {
            const { addStatus, newTodo} = await addTodo(value);
            if (addStatus) {
                dispatch({type: 'added', payload: { newTodo }});
                setValue("");
            } else {
                console.log(" не получилось добавить новый элемент");
            }
        } else {
            console.log("enter task name");
        }
        setIsLoading(false);
    }

    return (
        <div className={style.btns_wrapper}>
            <input value={value} onChange={(e) => setValue(e.target.value)} className={style.input_color} disabled={isLoading}/>
            <button onClick={add} className={style.task_btn} disabled={isLoading}>
                add
            </button>
        </div>
    )
}
export default AddTodo;