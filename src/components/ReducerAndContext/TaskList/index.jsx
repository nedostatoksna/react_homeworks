import { useContext, useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { tasksReducer } from './tasksReducer';
import style from "./TaskList.module.css";
import SubHeaders from "../../../ui/Headers/SubHeaders";
import { ThemeContext } from '../ThemeSwitch/ThemeContext';
const initialTasks = [
    { id: 0, text: 'default task', done: false },
    { id: 1, text: 'default task', done: false },
    { id: 2, text: 'default task', done: false },
];

export default function TaskApp() {
    const {theme} = useContext(ThemeContext);

    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    return (
        <div className={theme === 'lilac' ? style.lilac_wrapper : style.light_wrapper}>
            <section className={style.section}>
                <SubHeaders>Todo + reducer</SubHeaders>
                <div className={style.todo_box}>
                    <AddTask dispatch={dispatch}/>
                    <TaskList
                        tasks={tasks}
                        dispatch={dispatch}
                    />
                </div>
            </section>
        </div>
        
    );
};