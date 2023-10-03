import React from "react";
import style from "./Routing.module.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Navigation = ({isLoggedIn, setIsLoggedIn}) => {

    const backHome = useNavigate();

    const logIn = () => {
        if (isLoggedIn === false) {
            alert(' you have logged in!');
            setIsLoggedIn(true);
        }
    };

    const logOut = () => {
        if (isLoggedIn === true) {
            alert(' you have logged out!');
            setIsLoggedIn(false);
        }
        backHome("/home");
    };

    return (
        <>
            <nav>
                <ul>
                    {
                        isLoggedIn
                            ? (
                                <>
                                    <li>
                                        <NavLink to="home" className={style.link}>HomePage</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="private" className={style.link}>Private</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to="home" className={style.link}>HomePage</NavLink>
                                    </li>
                                </>
                            )
                    }
                </ul>
                <div className={style.btns_wrapper}>
                    <button className={style.task_btn} onClick={logIn}>
                        Log In
                    </button>
                    <button className={style.task_btn} onClick={logOut}>
                        Log Out
                    </button>

                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default Navigation;