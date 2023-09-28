import React, { useState, useContext } from "react";
import style from "./TaskList.module.css";
import { ThemeContext } from "../ThemeSwitch/ThemeContext";
const Task = ({ task, dispatch }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState(task.text);

    const { theme } = useContext(ThemeContext);
    const inputStyle = theme === 'lilac' ? style.input_for_lilac : style.input_color;
    const btnStyle = theme === 'lilac' ? style.btn_for_lilac : style.task_btn;

    const save = () => {
        dispatch({type: 'titleChanged', payload: {id: task.id, title}})
        setIsEdit(false);
    }

    const cansel = () => {
        setIsEdit(false);
    }

    return (

        <li className={style.item_box}>
            <input 
                type="checkbox" 
                checked={task.done} 
                onChange={() => dispatch({type: 'checked', payload: {id: task.id}})}
                className={style.list_checkbox}
            />
                {
                    isEdit
                        ?  (<>
                                <input value={ title } onChange={(e) => setTitle(e.target.value)} className={inputStyle}/>
                                <button onClick={save} className={btnStyle}>save</button>
                                <button onClick={cansel} className={btnStyle}>
                                    cancel
                                </button>
                                <button onClick={() => dispatch({type: 'deleted', payload: {taskId: task.id}})} className={btnStyle}>
                                    delete
                                </button>
                            </>
                        )
                        : (
                            <>
                                <div className={task.done ? style.task_done : style.task}>{task.text}</div>
                                <button onClick={() => setIsEdit(true)} className={btnStyle}>edit</button>
                                <button onClick={() => dispatch({type: 'deleted', payload: {taskId: task.id}})} className={btnStyle}>
                                    delete
                                </button>
                            </>
                        )
                }
        </li>
    )
};

export default Task;