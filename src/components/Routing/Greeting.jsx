import React from "react";
import style from "./Routing.module.css";
import { useParams } from "react-router-dom";

const Greeting = () => {
    const {pageId} = useParams();

    return (
        <>
            {
                (pageId === "home" || pageId === "private")
                    ? (
                        <>
                            <p className={style.p_color}>
                                Welcome to {pageId} page!
                            </p>
                        </>
                    ) : (
                        <> 
                        </>
                    )
            }
        </>
    )
};

export default Greeting;