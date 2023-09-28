import React, { useState } from "react";
import style from "./TaskListEffect.module.css";
import { deleteTodo, updateTodo } from "./api";
const Task = ({ task, dispatch }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [isLoading, setIsLoading] = useState(false);

    console.log(title);

    const save = async () => {
        setIsLoading(true);
        const { updStatus, updTodo } = await updateTodo({
            id: task.id,
            title,
            completed: task.done
        })
        console.log(updTodo, updStatus);
        if (updStatus) {
            dispatch({type: 'titleChanged', payload: {id: updTodo.id, title: updTodo.title}})
        } else {
            console.log(" не получилось обновить ");
        }
        setIsLoading(false);
        setIsEdit(false);
    };

    const cansel = () => {
        setIsEdit(false);
        setTitle(task.title);
    };

    const check = async () => {
        setIsLoading(true);
        const { updStatus, updTodo } = await updateTodo({
            id: task.id,
            title,
            completed: !task.done
        })
        console.log(updTodo, updStatus);
        if (updStatus) {
            dispatch({type: 'checked', payload: {id: updTodo.id, done: updTodo.completed}})
        } else {
            console.log(" не получилось обновить ");
        }
        setIsLoading(false);
        setIsEdit(false);
    };

    const deleteTask = async () => {
        setIsLoading(true);
        const { deleteStatus } = await deleteTodo({
            id: task.id,
        })
        if (deleteStatus) {
            dispatch({type: 'deleted', payload: {taskId: task.id}})
        } else {
            console.log(" не получилось удалить с сервера");
            dispatch({type: 'deleted', payload: {taskId: task.id}})
        }
        setIsLoading(false);
    };

    return (

        <li className={style.item_box}>
            <input 
                type="checkbox" 
                checked={task.done} 
                onChange={check}
                className={style.list_checkbox}
                disabled={isLoading}
            />
                {
                    isEdit
                        ?  (<>
                                <input value={ title } onChange={(e) => setTitle(e.target.value)} className={style.input_color} disabled={isLoading}/>
                                <button onClick={save} className={style.task_btn} disabled={isLoading}>save</button>
                                <button onClick={cansel} className={style.task_btn} disabled={isLoading}>
                                    cancel
                                </button>
                                <button disabled={isLoading} onClick={deleteTask} className={style.task_btn}>
                                    delete
                                </button>
                            </>
                        )
                        : (
                            <>
                                <div className={task.done ? style.task_done : style.task}>{title}</div>
                                <button disabled={isLoading} onClick={() => setIsEdit(true)} className={style.task_btn}>edit</button>
                                <button disabled={isLoading} onClick={deleteTask} className={style.task_btn}>
                                    delete
                                </button>
                            </>
                        )
                }
        </li>
    )
};

export default Task;