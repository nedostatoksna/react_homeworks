import React from "react";
import style from "./TaskList.module.css";
import Task from "./Task";

const TaskList = ({tasks, dispatch}) => {

    return (
        <ul className={style.list_wrapper}>
            {
                tasks.map(task =>(
                    <Task key={task.id} task={task} dispatch={dispatch} />

                ))
            }
        </ul>
    )
}
export default TaskList;