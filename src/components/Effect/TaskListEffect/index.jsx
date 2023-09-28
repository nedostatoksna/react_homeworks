import { useEffect, useReducer } from 'react';
import AddTodo from './AddTodo';
import ListOfTodos from './ListOfTodos';
import { tasksReducer } from './tasksReducer';
import style from "./TaskListEffect.module.css";
import SubHeaders from "../../../ui/Headers/SubHeaders";
import { getTodos } from './api';

export default function TaskListEffect() {
    const [tasks, dispatch] = useReducer( tasksReducer, [] );

    useEffect( () => {
        async function getData() {
            const todos = await getTodos();
            console.log(todos);
            dispatch({ type: 'init', payload: {todos} })
        }
        getData();
    }, []);


    return (
        <section className={style.section}>
            <SubHeaders>Todo Reduser + Effect</SubHeaders>
            <div className={style.todo_box}>
                <AddTodo dispatch={dispatch}/>
                <ListOfTodos
                    tasks={tasks}
                    dispatch={dispatch}
                />
            </div>
        </section>
    );
};