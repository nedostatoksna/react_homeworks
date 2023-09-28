import React from "react";
import style from "./Effect.module.css";
import LoadingBio from "./LoadingBio";
import TaskListEffect from "./TaskListEffect";
import ChatEffect from "./ChatEffect";

const Effect = () => {

    return (
        <>
            <LoadingBio />
            <TaskListEffect />
            <ChatEffect />
        </>
    )
};

export default Effect;